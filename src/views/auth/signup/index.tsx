import { useState } from "react";
import AuthLayout from "../../../components/authLayout";
import { useNavigate } from "react-router-dom";
import GetStarted from "./forms/getStarted";
import CompanyDetails from "../signup/forms/companyDetails";
import BusinessNeeds from "./forms/businessNeeds";
import { Button, Form } from "antd";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../api/instance";
import { FormContainer } from "./pages.styled";

export enum Industry {
  Tech = "Tech",
}

interface FormData {
  user: {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
  };
  company: {
    name: string;
    registrationNumber: string;
    industry: string;
    address: string;
    role: string;
    businessNeeds: number[];
  };
}

const initialState: FormData = {
  user: {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  },
  company: {
    name: "",
    registrationNumber: "",
    industry: Industry.Tech,
    address: "",
    role: "",
    businessNeeds: [],
  },
};

export default function Signup() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialState);

  const formButton = ["Next", "Continue", "Create account"];

  const navigate = useNavigate();

  const color = page === 1 ? "#A96644" : "var(--blue100)";

  const PageDisplay = () => {
    if (page === 0) {
      return <GetStarted formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <BusinessNeeds
          formData={formData}
          setFormData={setFormData}
          handleBusinessNeedsChange={handleBusinessNeedsChange}
        />
      );
    } else if (page === 2) {
      return <CompanyDetails formData={formData} setFormData={setFormData} />;
    }
  };

  const signupRequest = async (formData: any) => {
    try {
      const response = await instance.post("/company/signup", formData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { mutate } = useMutation(signupRequest);

  const SubmitFormHandler = async () => {
    try {
      const response = await mutate(formData);
      console.log(response);
      alert("account created");
      navigate("/confirmemail");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.log(axiosError.response);
      } else {
        console.log(error);
      }
    }
  };

  const handleBusinessNeedsChange = (
    event: { target: { checked: any } },
    index: number
  ) => {
    const value = event.target.checked ? index : -1;
    setFormData((prevFormData) => {
      const businessNeeds = [...prevFormData.company.businessNeeds];
      businessNeeds[index] = value;
      return {
        ...prevFormData,
        company: {
          ...prevFormData.company,
          businessNeeds,
        },
      };
    });
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <AuthLayout color={color}>
      <FormContainer>
        <Form
          onFinish={SubmitFormHandler}
          initialValues={formData}
          {...layout}
          name="nest-messages"
          id="for"
        >
          {PageDisplay()}
          <Form.Item className="mt-10">
            {page === 3 ? (
              <Button
                className="btn btn-blue mb-4"
                htmlType="submit"
                onClick={() => console.log(formData)}
              >
                {formButton[page]}
              </Button>
            ) : (
              <Button
                className="btn btn-blue mb-4"
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                {formButton[page]}
              </Button>
            )}
          </Form.Item>
        </Form>
      </FormContainer>
    </AuthLayout>
  );
}
