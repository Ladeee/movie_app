import { SignupContainer, Heading } from "../../pages.styled";
import { Form, Input, Select } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Industry } from "../..";

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

export default function CompanyDetails({ formData, setFormData }: any) {
  const { register } = useForm<FormValues>();

  return (
    <SignupContainer>
      <Heading className="sm:text-center md:text-left">
        Input Your Company Details
      </Heading>
      <Form.Item
        name="companyName"
        label="Company Name"
        labelCol={{ span: 24 }}
        rules={nameRules}
        className="mt-8"
      >
        <Input
          {...register("companyName")}
          style={{ width: "60vw" }}
          className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
          value={formData.company.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: {
                ...formData.company,
                name: e.target.value,
              },
            })
          }
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
          className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
          value={formData.company.registrationNumber}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: {
                ...formData.company,
                registrationNumber: e.target.value,
              },
            })
          }
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
          value={formData.company.industry}
          onChange={(value) =>
            setFormData({
              ...formData,
              company: { ...formData.company, industry: value },
            })
          }
          options={[
            { value: Industry.Tech, label: "Tech" },
            // { value: Industry.Factory, label: "Factory" },
            // { value: Industry.Shop, label: "Shop" },
            // { value: Industry.Disabled, label: "Disabled", disabled: true },
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
          className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
          value={formData.company.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: {
                ...formData.company,
                address: e.target.value,
              },
            })
          }
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
          className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
          value={formData.company.role}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: {
                ...formData.company,
                role: e.target.value,
              },
            })
          }
        />
      </Form.Item>
    </SignupContainer>
  );
}
