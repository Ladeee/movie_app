import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../components/authLayout";
import {
  Container,
  Heading,
  RememberPassword,
  Check,
  Remember,
  Forgot,
  // Button,
  Account,
} from "./login.styled";
import { Button, Form, Input } from "antd";

export default function Login() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
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
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "email"]}
            label="Email Address"
            labelCol={{ span: 24 }}
            rules={[{ type: "email" }]}
          >
            <Input
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1] "
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1] "
            />
          </Form.Item>
          <RememberPassword>
            <Check>
              <input type="checkbox" className="w-19 h-19 cursor-pointer" />
              <Remember>Remember me</Remember>
            </Check>

            <Link to="/recoverpassword">
              <Forgot>Forgot password</Forgot>
            </Link>
          </RememberPassword>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button className="btn" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/signup">
          <Account>Create Account</Account>
        </Link>
      </Container>
    </AuthLayout>
  );
}
