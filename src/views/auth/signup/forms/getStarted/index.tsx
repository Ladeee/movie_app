import { SignupContainer, Heading } from "../../pages.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "antd";

interface FormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const nameRules: Rule[] = [
  { required: true, message: "Please enter your full name" },
];
const phoneNumberRules: Rule[] = [
  { required: true, message: "Please enter your phone number" },
];
const emailRules: Rule[] = [
  { required: true, message: "Please enter your email" },
];
const passwordRules: Rule[] = [
  { required: true, message: "Please enter your password" },
];

export default function GetStarted({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    goToNextPage();
  };

  return (
    <>
      <SignupContainer>
        <Heading className="sm:text-center md:text-left">Get Started</Heading>
        <Form
          className="mt-8"
          {...layout}
          name="nest-messages"
          onFinish={handleSubmit(onSubmit)}
          style={{ maxWidth: 600 }}
          id="form"
        >
          <Form.Item
            label="Full Name"
            labelCol={{ span: 24 }}
            name="fullName"
            rules={nameRules}
          >
            <Input
              {...register("fullName")}
              style={{ width: "60vw" }}
              placeholder="John Doe"
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            labelCol={{ span: 24 }}
            rules={phoneNumberRules}
          >
            <Input
              {...register("phoneNumber")}
              style={{ width: "60vw" }}
              placeholder="+234"
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            />
          </Form.Item>
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
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            hasFeedback
            rules={passwordRules}
          >
            <Input.Password
              {...register("password")}
              style={{ width: "60vw" }}
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
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
              className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            className="mt-14 flex justify-start"
          >
            <Button type="primary" htmlType="submit" className="btn">
              Next
            </Button>
          </Form.Item>
        </Form>
      </SignupContainer>
    </>
  );
}
