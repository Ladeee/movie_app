import { SignupContainer, Heading } from "../../pages.styled";
import { Button, Form, Input, Select } from "antd";

export default function CompanyDetails({
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <SignupContainer>
      <Heading className="sm:text-center md:text-left">
        Input Your Company Details
      </Heading>

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
          name={["user", "name"]}
          label="Company Name"
          labelCol={{ span: 24 }}
          rules={[{ required: true }]}
        >
          <Input
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name={["user", "regNumber"]}
          label="CAC Registration Number"
          labelCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please input your CAC reg number!" },
          ]}
        >
          <Input
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name={["user", "industry"]}
          label="Industry"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please choose your industry!" }]}
        >
          <Select
            defaultValue="Industry"
            style={{ width: "60vw" }}
            onChange={handleChange}
            options={[
              { value: "Industry", label: "Industry" },
              { value: "Factory", label: "Factory" },
              { value: "Shop", label: "Shop" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={["user", "companyAddress"]}
          label="Company Address"
          labelCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please input your Company address!" },
          ]}
        >
          <Input
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name={["user", "role"]}
          label="Role"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please choose your Role!" }]}
        >
          <Input
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
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </SignupContainer>
  );
}
