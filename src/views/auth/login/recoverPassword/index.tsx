import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import { Container, Heading, Acc } from "../login.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";
import { instance } from "../../../../api/instance";

const emailRules: Rule[] = [
  { required: true, message: "Please enter your email" },
];

export default function RecoverPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register } = useForm();

  const navigate = useNavigate();

  const handleRecoverSubmit = async (data: any) => {
    console.log("Form data:", data);
    try {
      const response = await instance.post("user/resetpassword", {
        email: data.email,
      });
      console.log("API response:", response);
      navigate("/setPassword");
      return response;
    } catch (error) {
      console.log("API error:", error);
      throw error;
    }
  };

  return (
    <AuthLayout color="#2C2F6D">
      <Container>
        <Heading>Recover your password easily!</Heading>
        <Form
          className="mt-8"
          id="form"
          {...layout}
          name="nest-messages"
          onFinish={handleRecoverSubmit}
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
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            className="mt-12"
          >
            <Button className="btn" type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>

          <Link to="/signup">
            <Acc className="mr-14">Create Account</Acc>
          </Link>
        </Form>
      </Container>
    </AuthLayout>
  );
}
