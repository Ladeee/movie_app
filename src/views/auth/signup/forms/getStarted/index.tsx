import {
  SignupContainer,
  Heading,
  // Button,
} from "../../pages.styled";
import { Button, Form, Input } from "antd";

export default function GetStarted({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <SignupContainer>
        <Heading className="sm:text-center md:text-left">Get Started</Heading>
        <Form
          className="mt-8"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Full Name"
            labelCol={{ span: 24 }}
            rules={[{ required: true }]}
          >
            <Input
              style={{ width: "60vw" }}
              placeholder="John Doe"
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              style={{ width: "60vw" }}
              placeholder="+234"
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
            />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email Address"
            labelCol={{ span: 24 }}
            rules={[{ type: "email" }]}
          >
            <Input
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              onClick={goToNextPage}
              className="btn"
              type="primary"
              htmlType="submit"
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </SignupContainer>
    </>
  );
}
