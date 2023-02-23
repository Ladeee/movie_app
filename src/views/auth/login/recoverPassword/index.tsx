import { Link } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import {
  Container,
  Heading,
  // Button,
  Acc,
} from "../login.styled";
import { Button, Form, Input } from "antd";

export default function RecoverPassword() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
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
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={["user", "email"]}
            label="Email Address"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              style={{ width: "60vw" }}
              className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Link to="/setpassword">
              <Button className="btn" type="primary" htmlType="submit">
                Reset
              </Button>
            </Link>
          </Form.Item>

          <Link to="/signup">
            <Acc>Create Account</Acc>
          </Link>
        </Form>
      </Container>
    </AuthLayout>
  );
}
