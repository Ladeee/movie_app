import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/authLayout";
import {
  Container,
  Heading,
  RememberPassword,
  Check,
  Remember,
  Forgot,
  Account,
} from "./login.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";

interface FormValues {
  email: string;
  password: string;
}

const emailRules: Rule[] = [
  { required: true, message: "Please enter your email" },
];
const passwordRules: Rule[] = [
  { required: true, message: "Please enter your password" },
];

export default function Login() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/company/dashboard");
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
          onFinish={handleSubmit(onSubmit)}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="email"
            label="Email Address"
            labelCol={{ span: 24 }}
            rules={emailRules}
          >
            <Input
              {...register("email")}
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1] "
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            hasFeedback
            rules={passwordRules}
          >
            <Input.Password
              {...register("password")}
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
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            className="mt-12 flex justify-start"
          >
            <Button className="btn" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/signup">
          <Account className="mr-14">Create Account</Account>
        </Link>
      </Container>
    </AuthLayout>
  );
}
