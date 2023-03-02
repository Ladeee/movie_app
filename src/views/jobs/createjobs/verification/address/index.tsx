import React, { useState } from "react";
import {
  AddressContainer,
  Upload,
  VerificationButtons,
  Submit,
  ImageWrapper,
} from "../verifications.styled";
import { ImFilePicture } from "react-icons/im";
import { Button, DatePickerProps } from "antd";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  state: any;
  lga: any;
}

const { TextArea } = Input;

const firstNameRules: Rule[] = [
  { required: true, message: "Please enter your first name" },
];

const lastNameRules: Rule[] = [
  { required: true, message: "Please enter your last name" },
];

const emailRules: Rule[] = [
  { required: true, message: "Please enter your email" },
];

const phoneNumberRules: Rule[] = [
  { required: true, message: "Please enter your phone number" },
];

const stateRules: Rule[] = [
  { required: true, message: "Select your your state" },
];
const lgaRules: Rule[] = [{ required: true, message: "Please enter your lga" }];
const dateRules: Rule[] = [
  { required: true, message: "Please choose the due date" },
];

export default function AddressVerification({
  nextPage,
}: {
  nextPage: () => void;
}) {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const { register, handleSubmit } = useForm<FormValues>();

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setUploadedImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSubmit = (data: FormValues) => {
    nextPage();
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <AddressContainer>
      <Upload>
        <p className="text-base font-semibold">Upload individual image</p>
        <ImageWrapper>
          <input
            type="file"
            title=""
            className="uploadInput"
            onChange={(e) => convertFile(e.target.files)}
          />
          <i>
            <ImFilePicture className="w-10 h-10" />
          </i>

          {uploadedImage.indexOf("image/") > -1 && (
            <img
              src={uploadedImage}
              width={300}
              className="uploadedImage"
              alt="uploaded"
            />
          )}
        </ImageWrapper>
      </Upload>
      <Form
        className="mt-8"
        id="form"
        {...layout}
        name="nest-messages"
        onFinish={handleSubmit(onSubmit)}
      >
        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="First Name"
              labelCol={{ span: 24 }}
              name="firstName"
              rules={firstNameRules}
            >
              <Input
                {...register("firstName")}
                style={{ width: "28vw" }}
                placeholder="John"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Last Name"
              labelCol={{ span: 24 }}
              name="lastName"
              rules={lastNameRules}
            >
              <Input
                {...register("lastName")}
                style={{ width: "28vw" }}
                placeholder="Doe"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Email"
              labelCol={{ span: 24 }}
              name="email"
              rules={emailRules}
            >
              <Input
                {...register("email")}
                style={{ width: "28vw" }}
                placeholder="John@gmai.com"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Phone number"
              labelCol={{ span: 24 }}
              name="phoneNumber"
              rules={phoneNumberRules}
            >
              <Input
                {...register("phoneNumber")}
                style={{ width: "28vw" }}
                placeholder="+234"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Address"
              labelCol={{ span: 24 }}
              name="address"
              // rules={nameRules}
            >
              <Input
                // {...register("address")}
                style={{ width: "28vw" }}
                placeholder="Will street"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="state"
              label="State"
              labelCol={{ span: 24 }}
              rules={stateRules}
            >
              <Select
                {...register("state")}
                placeholder="Lagos"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Lagos", label: "Lagos" },
                  { value: "Ondo", label: "Ondo" },
                  { value: "Abuja", label: "Abuja" },
                  { value: "Oyo", label: "Oyo", disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="lga"
              label="L.G.A"
              labelCol={{ span: 24 }}
              rules={lgaRules}
            >
              <Select
                {...register("lga")}
                placeholder="Ikeja"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Ikeja", label: "Ikeja" },
                  { value: "Ilaje", label: "Ilaje" },
                  { value: "Ikorodu", label: "Ikorodu" },
                  { value: "Mushin", label: "Mushin", disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Closest Landmark"
              labelCol={{ span: 24 }}
              name="landmark"
              // rules={landmarkRules}
            >
              <Input
                // {...register("landmark")}
                style={{ width: "28vw" }}
                placeholder="Daniel street"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64" id="reverse">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="info"
              label="Additional Information"
              labelCol={{ span: 24 }}
            >
              <TextArea
                style={{ width: "28vw", resize: "none" }}
                className="h-28 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Verification Due Date"
              labelCol={{ span: 24 }}
              name="date"
              rules={dateRules}
            >
              <DatePicker
                onChange={onChange}
                // {...register("date")}
                style={{ width: "28vw" }}
                placeholder="Date"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)] cursor-pointer"
              />
            </Form.Item>
          </Col>
        </Row>

        <VerificationButtons className="row flex flex-col">
          <Button
            type="primary"
            htmlType="submit"
            className="btn text-[var(--blue100)] bg-[var(--white50)]"
          >
            Add Guarantor
          </Button>
          <Submit className="btn bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
            SUBMIT AND PAY
          </Submit>
        </VerificationButtons>
      </Form>
    </AddressContainer>
  );
}
