// ---------- import external dependencies -----------
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button, notification } from "antd";

// ------------ import internal dependencies ------------
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
import useAuth from "../hooks/useAuth";
import { useStoreWrapper } from "../../../store";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ------- intialize custom hooks -------
  const { login } = useAuth();
  const navigate = useNavigate();
  const updateUser = useStoreWrapper((store) => store.updateUser);

  /**
   * Handle login mutation
   */
  const { mutateAsync: callLogin, isLoading: submitting } = login;

  /**
   * Handle email change
   * @param e
   * @returns
   */
  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setEmail(e.target.value);

  /**
   * Handle password change
   * @param e
   * @returns
   */
  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(e.target.value);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register } = useForm<FormValues>();

  // TODO: This can be updated to use just mutate instead of mutateAsync
  /**
   * Handle form submission
   * @returns
   */
  const handleLoginSubmit = async () => {
    try {
      const response = await callLogin({ email, password });
      console.log(response);

      // store token in
      localStorage.setItem("accessToken", response.data.data.token);

      updateUser(response.data.data.user);
      navigate("/company/dashboard");
    } catch (error: any) {
      notification.error({
        message: "Login Failed",
        description: error?.response?.data?.error?.message,
      });
    }
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
          onFinish={handleLoginSubmit}
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
              className="h-14 bg-[var(--slate50))] border-[var(--slate300)] "
              onChange={handleEmailChange}
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
              className="h-14 bg-[var(--slate50))] border-[var(--slate300)] "
              onChange={handlePasswordChange}
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
            <Button
              className="btn"
              type="primary"
              htmlType="submit"
              disabled={submitting}
            >
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
