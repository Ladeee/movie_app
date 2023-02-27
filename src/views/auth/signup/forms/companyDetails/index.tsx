import { SignupContainer, Heading } from "../../pages.styled";
import { Form, Input, Button, Select } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";

interface FormValues {
  companyName: string;
  regNumber: string;
  industry: string;
  companyAddress: string;
  role: string;
}

const nameRules: Rule[] = [
  { required: true, message: "Please enter your company name" },
];
const regNumberRules: Rule[] = [
  { required: true, message: "Please enter your registration number" },
];
const selectRules: Rule[] = [
  { required: true, message: "Select your industry" },
];
const companyAddressRules: Rule[] = [
  { required: true, message: "Please enter your company address" },
];
const roleRules: Rule[] = [
  { required: true, message: "Please enter your role" },
];

export default function CompanyDetails({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  const { register, handleSubmit } = useForm<FormValues>();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    goToNextPage();
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
        onFinish={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="companyName"
          label="Company Name"
          labelCol={{ span: 24 }}
          rules={nameRules}
        >
          <Input
            {...register("companyName")}
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name="regNumber"
          label="CAC Registration Number"
          labelCol={{ span: 24 }}
          rules={regNumberRules}
        >
          <Input
            {...register("regNumber")}
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name="industry"
          label="Industry"
          labelCol={{ span: 24 }}
          rules={selectRules}
        >
          <Select
            {...register("industry")}
            placeholder="Industry"
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
          name="companyAddress"
          label="Company Address"
          labelCol={{ span: 24 }}
          rules={companyAddressRules}
        >
          <Input
            {...register("companyAddress")}
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          labelCol={{ span: 24 }}
          rules={roleRules}
        >
          <Input
            {...register("role")}
            style={{ width: "60vw" }}
            className="h-14 bg-[#F8FAFC] border-[#CBD5E1]"
          />
        </Form.Item>
        <Form.Item
          className="mt-14 flex justify-start"
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
          <Button className="btn" type="primary" htmlType="submit">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </SignupContainer>
  );
}
