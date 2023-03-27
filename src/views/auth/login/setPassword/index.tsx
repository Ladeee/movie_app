import AuthLayout from "../../../../components/authLayout";
import { Container, Heading } from "../login.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router";
import { instance } from "../../../../api/instance";
import { useMutation } from "@tanstack/react-query";

interface FormValues {
  email: string;
  password: string;
}

const passwordRules: Rule[] = [
  { required: true, message: "Please enter your password" },
];

export default function SetPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register } = useForm<FormValues>();

  const navigate = useNavigate();

  const handleChangePassword = async ({
    newPassword,
    token,
  }: {
    newPassword: string;
    token: string;
  }) => {
    const response = await instance.post(
      "/user/changepassword",
      { newPassword, token }, // Include token in request body
      { headers: { Authorization: `Bearer ${token}` } }
    ); // Include token in headers
    navigate("/login");
    return response.data;
  };

  const { mutate } = useMutation(handleChangePassword);

  const handleSubmitSetPassword = async (event: {
    target: HTMLFormElement | undefined;
  }) => {
    const formData = new FormData(event.target);
    const newPassword = String(formData.get("newPassword")); // Convert to string
    const token = localStorage.getItem("token") as string; // Retrieve token from local storage

    await mutate({ newPassword, token });
  };

  return (
    <AuthLayout color="#007C23">
      <Container>
        <Heading>Welcome Back!</Heading>

        <Form
          className="mt-8"
          id="form"
          {...layout}
          name="nest-messages"
          onFinish={handleSubmitSetPassword}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="newPassword"
            label="New Password"
            labelCol={{ span: 24 }}
            hasFeedback
            rules={passwordRules}
            id="newPassword"
          >
            <Input.Password
              {...register("password")}
              style={{ width: "60vw" }}
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            />
          </Form.Item>

          {/* <Form.Item
            name="confirm"
            label="Confirm Password"
            labelCol={{ span: 24 }}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={{ width: "60vw" }}
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            />
          </Form.Item> */}
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            className="mt-12"
          >
            <Button className="btn" type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </AuthLayout>
  );
}
