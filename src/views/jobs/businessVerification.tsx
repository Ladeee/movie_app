// ------------- import external dependencies -------------
import { Card, Form, Input, Select, Upload } from "antd";
import styled from "styled-components";

// ---------- import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import DummyImg from "../../assets/dummy.png";
import { ReactComponent as File } from "../../assets/svg/file.svg";
import CirclePlaceholder from "../../components/CirclePlaceholder";

function BusinessVerification() {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Create Job > Business Verification">
        <div className="flex gap-4">
          <button className="btn btn-blue">Continue</button>
          <button className="btn btn-blue">Create Job</button>
        </div>
      </LayoutHeading>

      {/* ------- identity verification form ------- */}
      <Card className="py-6 md:px-8 px-5 mt-8">
        <h2 className="my-6 font-semibold text-base">Upload Contact Image</h2>
        <CirclePlaceholder className="mb-8 flex justify-center items-center">
          <img src={DummyImg} alt="business logo" />
        </CirclePlaceholder>
        <Form form={form} name="identity-form" layout="vertical">
          <div className="grid md:grid-cols-2 md:gap-12">
            <div>
              <Form.Item name="firstname" label="Contact First Name">
                <Input placeholder="First name" size="large" />
              </Form.Item>
              <Form.Item name="regNumber" label="Business Registration Number">
                <Input placeholder="RC 82727282" size="large" type="text" />
              </Form.Item>
              <Form.Item name="address" label="Business Address">
                <Input placeholder="" size="large" type="text" />
              </Form.Item>
              <Form.Item name="phone" label="Phone number">
                <Input
                  placeholder="+1 (555) 000-0000"
                  size="large"
                  type="text"
                />
              </Form.Item>
              <Form.Item name="type" label="State">
                <Select size="large">
                  <Option value="">Select state</Option>
                </Select>
              </Form.Item>
              <Form.Item name="information" label="Addtional information">
                <Input.TextArea className="resize-none h-[116px]" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="lastname" label="Contact Last Name">
                <Input placeholder="Contact Last Name" size="large" />
              </Form.Item>
              <Form.Item name="businessname" label="Business/Company Name">
                <Input placeholder="EXT LTD" size="large" />
              </Form.Item>
              <Form.Item name="landmark" label="Closest Landmark">
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="letter"
                label="Authorization  Letter"
                className=""
              >
                <Upload>
                  <UploadWrapper>
                    <div></div>
                    <File />
                  </UploadWrapper>
                </Upload>
              </Form.Item>
              {/* <Form.Item name="number" label="Phone number">
                <Input placeholder="+1 (555) 000-0000" size="large" />
              </Form.Item> */}
              <Form.Item name="lga" label="L.G.A.">
                <Select size="large">
                  <Option value="">Select a lga</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <button className="btn btn-blue font-medium">SUBMIT & PAY</button>
          </div>
        </Form>
      </Card>
    </>
  );
}

export default BusinessVerification;

// ------- component styles -------
export const UploadWrapper = styled.div`
  background: transaparent;
  height: 38px;
  border: 1px solid var(--ash200);
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  color: var(--grey400);
`;
