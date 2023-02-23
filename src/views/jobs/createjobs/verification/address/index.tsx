import React, { useState } from "react";
import {
  AddGuarantor,
  AddressContainer,
  Upload,
  VerificationButtons,
  Submit,
  ImageWrapper,
} from "../verifications.styled";
import {
  DatePicker,
  Col,
  Row,
  Form,
  Input,
  DatePickerProps,
  Select,
} from "antd";
import { ImFilePicture } from "react-icons/im";

export default function AddressVerification({
  nextPage,
}: {
  nextPage: () => void;
}) {
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const { TextArea } = Input;

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  // const formSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Submit your form with the uploadedImage as one of your fields
  //   console.log({ uploadedImage });
  //   alert(
  //     "here you'd submit the form using\n the uploadedImage like any other field"
  //   );
  // };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setUploadedImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  return (
    <AddressContainer>
      <Upload>
        <p className="text-base font-semibold">Upload individual image</p>
        <ImageWrapper>
          <input
            type="file"
            title=""
            className="uploadInput"
            onChange={(e) => convertFile(e.target.files)}
          />
          <i>
            <ImFilePicture className="w-10 h-10" />
          </i>

          {uploadedImage.indexOf("image/") > -1 && (
            <img
              src={uploadedImage}
              width={300}
              className="uploadedImage"
              alt="uploaded"
            />
          )}
        </ImageWrapper>
      </Upload>
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
              name={["user", "Address"]}
              label="Address"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="11 Williams, Street"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "landmark"]}
              label="Closest Landmark"
              labelCol={{ span: 24 }}
              // rules={[{ required: true }]}
            >
              <Input
                style={{ width: "28vw" }}
                placeholder="you@gmail.com"
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex gap-64">
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "state"]}
              label="State"
              labelCol={{ span: 24 }}
            >
              <Select
                defaultValue="Lagos"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Lagos", label: "Lagos" },
                  { value: "Ondo", label: "Ondo" },
                  { value: "Ogun", label: "Ogun" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 5 }} lg={{ span: 6 }}>
            <Form.Item
              name={["user", "lga"]}
              label="L.G.A"
              labelCol={{ span: 24 }}
            >
              <Select
                defaultValue="L.G.A"
                style={{ width: "28vw" }}
                onChange={handleChange}
                options={[
                  { value: "Ilaje", label: "Ilaje" },
                  { value: "Badagry", label: "Badagry" },
                  { value: "Ikeja", label: "Ikeja" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
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
              name={["user", "duedate"]}
              label="Verification Due Date"
              labelCol={{ span: 24 }}
            >
              <DatePicker
                className="h-12 bg-[#F8FAFC] border-[#CBD5E1]"
                onChange={onChange}
                style={{ width: "28vw" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="flex gap-64">
          <VerificationButtons>
            <AddGuarantor onClick={nextPage}>Add Guarantor</AddGuarantor>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </Row>
      </Form>
    </AddressContainer>
  );
}
