// ------------- import external dependencies -------------
import { Card, Form, Input, Select } from "antd";

// ---------- import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import { ReactComponent as CheckMark } from "../../assets/svg/check.svg";
import CirclePlaceholder from "../../components/CirclePlaceholder";

function BusinessIdentityVerification() {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Create Job > Business Adddress Verification">
        <div className="flex gap-4">
          <button className="btn btn-blue">Continue</button>
          <button className="btn btn-blue">Create Job</button>
        </div>
      </LayoutHeading>

      {/* ------- identity verification form ------- */}
      <Card className="py-12 md:px-8 px-5 mt-8">
        <div className="bg-purple-300 min-w-[140px] min-h-[35px] rounded w-fit flex justify-center items-center gap-4">
          <span className="block text-white-50 text-sm font-semibold">
            BUSINESS
          </span>
          <CheckMark />
        </div>
        <h2 className="my-8 font-semibold text-base">
          Business Address Verification
        </h2>
        <CirclePlaceholder className="mb-8" />
        <Form form={form} name="identity-form" layout="vertical">
          <div className="grid md:grid-cols-2 md:gap-12">
            <div>
              <Form.Item name="businessname" label="Business name">
                <Input placeholder="Business name" size="large" />
              </Form.Item>
              <Form.Item name="address" label="Address">
                <Input
                  placeholder="111, williams st yaba"
                  size="large"
                  type="text"
                />
              </Form.Item>
              <Form.Item name="type" label="State">
                <Select size="large">
                  <Option value="">Select a State</Option>
                </Select>
              </Form.Item>
              <Form.Item name="information" label="Addtional information">
                <Input.TextArea className="resize-none h-[116px]" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="contact" label="Contact Person">
                <Input placeholder="contatct" size="large" />
              </Form.Item>
              <Form.Item name="number" label="Phone number">
                <Input placeholder="+1 (555) 000-0000" size="large" />
              </Form.Item>
              <Form.Item name="lga" label="L.G.A.">
                <Select size="large">
                  <Option value="">Select a lga</Option>
                </Select>
              </Form.Item>
              <Form.Item name="landmark" label="Closest Landmark">
                <Input placeholder="landmark" size="large" />
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

export default BusinessIdentityVerification;
