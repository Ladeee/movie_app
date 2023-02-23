import AuthLayout from "../../../../components/authLayout";
import { Container, Heading } from "../login.styled";
import { Button, Form, Input } from "antd";

export default function SetPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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
        >
          <Form.Item
            name="password"
            label="New Password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your new password!",
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
            <Button className="btn" type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </AuthLayout>
  );
}
