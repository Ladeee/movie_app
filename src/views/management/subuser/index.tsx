// import external dependencies
import { Button, Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

// import internal dependencies
import {
  SubuserWrapper,
  Headers,
  SubuserContainer,
} from "../management.styled";
// import { Link } from "react-router-dom";

// form input types defined
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

// form validation required rules
const firstNameRules: Rule[] = [
  { required: true, message: "Please enter your first name" },
];
const lastNameRules: Rule[] = [
  { required: true, message: "Please enter your last name" },
];
const emailRules: Rule[] = [
  { required: true, message: "Please enter your email" },
];
const phoneNumberRules: Rule[] = [
  { required: true, message: "Please enter your phone number" },
];
const passwordRules: Rule[] = [
  { required: true, message: "Please enter your password" },
];

export default function SubUser() {
  const navigate = useNavigate();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const { register, handleSubmit } = useForm<FormValues>();

  // submit and validation function
  const onSubmit = (data: FormValues) => {
    navigate("/company/users/permissions");
  };

  return (
    <SubuserContainer>
      <Headers>
        <div className="flex items-center gap-2 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">User Management</h2>
          <IoIosArrowForward className="icon" />
          <p className="text-lg md:text-2xl font-semibold">Create Sub User</p>
        </div>
        <div>
          {/* <Link to="subuser"> */}
          <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
            Create
          </button>
          {/* </Link> */}
        </div>
      </Headers>
      <SubuserWrapper>
        <div className="heading">
          <h2 className="font-semibold text-xl pt-6 pb-8">
            New User Registration
          </h2>
        </div>
        <Form
          className="mt-4"
          {...layout}
          name="nest-messages"
          onFinish={handleSubmit(onSubmit)}
          style={{ maxWidth: 600 }}
          id="subUserform"
        >
          <Form.Item
            label="First Name"
            labelCol={{ span: 24 }}
            name="firstName"
            rules={firstNameRules}
          >
            <Input
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
              {...register("firstName")}
              placeholder="First name"
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            labelCol={{ span: 24 }}
            name="lastName"
            rules={lastNameRules}
          >
            <Input
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
              {...register("lastName")}
              placeholder="Last name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            labelCol={{ span: 24 }}
            name="email"
            rules={emailRules}
          >
            <Input
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
              {...register("email")}
              placeholder="johnny@gmail.com"
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            labelCol={{ span: 24 }}
            name="phoneNumber"
            rules={phoneNumberRules}
          >
            <Input
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
              {...register("phoneNumber")}
              placeholder="+234"
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
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
              {...register("password")}
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
              className="border-[var(--grey300)]"
              style={{ width: "31vw", height: "48px" }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            className="mt-12"
          >
            <Button
              style={{ width: "31vw", height: "48px" }}
              className="btn btn-blue"
              type="primary"
              htmlType="submit"
            >
              CREATE AND SET PERMISSION
            </Button>
          </Form.Item>
        </Form>
      </SubuserWrapper>
    </SubuserContainer>
  );
}
