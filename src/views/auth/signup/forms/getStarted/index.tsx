import { SignupContainer, Heading } from "../../pages.styled";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { Form, Input } from "antd";

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

export default function GetStarted({ formData, setFormData }: any) {
  const { register } = useForm();

  return (
    <>
      <SignupContainer>
        <Heading className="sm:text-center md:text-left">Get Started</Heading>
        <Form.Item
          label="Full Name"
          labelCol={{ span: 24 }}
          name="fullName"
          rules={nameRules}
          className="mt-8"
        >
          <Input
            type="text"
            {...register("fullName", { required: true })}
            style={{ width: "60vw" }}
            placeholder="John Doe"
            className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
            value={formData.user.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                user: {
                  ...formData.user,
                  fullName: e.target.value,
                },
              })
            }
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
            value={formData.user.phoneNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                user: {
                  ...formData.user,
                  phoneNumber: e.target.value,
                },
              })
            }
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
            value={formData.user.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                user: {
                  ...formData.user,
                  email: e.target.value,
                },
              })
            }
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
            value={formData.user.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                user: {
                  ...formData.user,
                  password: e.target.value,
                },
              })
            }
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
                  new Error("The two passwords that you entered do not match!")
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
      </SignupContainer>
    </>
  );
}
