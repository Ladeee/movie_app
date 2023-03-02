import {
  IdentityContainer,
  VerificationButtons,
} from "../verifications.styled";
import { Col, Row, Form, Input, Button, Select } from "antd";
import { Rule } from "antd/lib/form";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  state: any;
  lga: any;
}

const { TextArea } = Input;

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

const genderRules: Rule[] = [
  { required: true, message: "Please choose your gender" },
];

export default function IdentityVerification() {
  const { register, handleSubmit } = useForm<FormValues>();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSubmit = (data: FormValues) => {};

  return (
    <IdentityContainer>
      <Form
        className="mt-8"
        id="form"
        {...layout}
        name="nest-messages"
        onFinish={handleSubmit(onSubmit)}
      >
        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="First Name"
              labelCol={{ span: 24 }}
              name="firstName"
              rules={firstNameRules}
            >
              <Input
                {...register("firstName")}
                style={{ width: "28vw" }}
                placeholder="John"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Last Name"
              labelCol={{ span: 24 }}
              name="lastName"
              rules={lastNameRules}
            >
              <Input
                {...register("lastName")}
                style={{ width: "28vw" }}
                placeholder="Doe"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Email"
              labelCol={{ span: 24 }}
              name="email"
              rules={emailRules}
            >
              <Input
                {...register("email")}
                style={{ width: "28vw" }}
                placeholder="John@gmai.com"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Phone number"
              labelCol={{ span: 24 }}
              name="phoneNumber"
              rules={phoneNumberRules}
            >
              <Input
                {...register("phoneNumber")}
                style={{ width: "28vw" }}
                placeholder="+234"
                className="h-14 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="idtype"
              label="ID Type"
              labelCol={{ span: 24 }}
              // rules={stateRules}
            >
              <Select
                // {...register("id")}
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "NIN", label: "NIN" },
                  { value: "Passport", label: "Passport" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="idnumber"
              label="ID Number"
              labelCol={{ span: 24 }}
              // rules={stateRules}
            >
              <Select
                // {...register("state")}
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[{}]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="row flex gap-64" id="reverse">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="info"
              label="Additional Information"
              labelCol={{ span: 24 }}
            >
              <TextArea
                style={{ width: "28vw", resize: "none" }}
                className="h-28 bg-[var(--slate50)] border-[var(--slate300)]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              label="Gender"
              labelCol={{ span: 24 }}
              name="gender"
              rules={genderRules}
            >
              <Select
                // {...register("gender")}
                placeholder="Gender"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <VerificationButtons className="row flex flex-col">
          <Button className="btn bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
            SUBMIT AND PAY
          </Button>
        </VerificationButtons>
      </Form>
    </IdentityContainer>
  );
}
