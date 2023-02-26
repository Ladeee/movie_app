import AuthLayout from "../../../../components/authLayout";
import { Container, Heading } from "../login.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router";

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

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/login");
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
            name="password"
            label="New Password"
            labelCol={{ span: 24 }}
            hasFeedback
            rules={passwordRules}
          >
            <Input.Password
              {...register("password")}
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
            />
          </Form.Item>

          <Form.Item
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
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
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
        </Form>
      </Container>
    </AuthLayout>
  );
}
