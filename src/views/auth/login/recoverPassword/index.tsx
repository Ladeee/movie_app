import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import { Container, Heading, Acc } from "../login.styled";
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

export default function RecoverPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/setpassword");
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
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
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
