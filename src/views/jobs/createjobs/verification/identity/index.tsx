// import { useState } from "react";
import {
  VerificationButtons,
  Submit,
  IdentityContainer,
} from "../verifications.styled";
import { Col, Row, Form, Input, Select } from "antd";

export default function IdentityVerification() {
  const { TextArea } = Input;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <IdentityContainer>
      {/* <FormWrapper>
        <Info>
          <InputWrapper>
            <label>First Name</label>
            <Input type="text" placeholder="First name" />
          </InputWrapper>
          <InputWrapper>
            <label>Last Name</label>
            <Input type="text" placeholder="Last name" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Email</label>
            <Input type="email" placeholder="you@gmail.com" />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <Input type="tel" placeholder="+1 (555)" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>ID Type</label>
            <Input type="text" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
          <InputWrapper>
            <label>ID Number</label>
            <Input type="number" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>

        <Info id="reverse">
          <InputWrapper>
            <label>Additional Information</label>
            <textarea />
          </InputWrapper>
          <InputWrapper>
            <label>Gender</label>
            <Input type="text" />
            <i id="calender">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>

        <Info>
          <VerificationButtons>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </Info>
      </FormWrapper> */}

      <Form
        className="mt-8"
        id="form"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        // style={{ maxWidth: 600 }}
      >
        <Row className="flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "firstname"]}
              label="First Name"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="John"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "lastname"]}
              label="Last Name"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="Doe"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "email"]}
              label="Email Address"
              labelCol={{ span: 24 }}
              rules={[{ type: "email" }]}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="johndoe@gmail.com"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name="phone"
              label="Phone Number"
              labelCol={{ span: 24 }}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="+234"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "idType"]}
              label="ID Type"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                style={{ width: "28vw" }}
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "idNumber"]}
              label="ID Number"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                type="number"
                style={{ width: "28vw" }}
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="flex gap-64" id="reverse">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "information"]}
              label="Additional Information"
              labelCol={{ span: 24 }}
            >
              <TextArea
                style={{ width: "28vw", maxWidth: "unset", resize: "none" }}
                className="h-28 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "gender"]}
              label="Gender"
              labelCol={{ span: 24 }}
              rules={[
                { required: true, message: "Please choose your gender!" },
              ]}
            >
              <Select
                defaultValue="Male"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex gap-64">
          <VerificationButtons>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </Row>
      </Form>
    </IdentityContainer>
  );
}
