// ------------- import external dependencies -------------
import { Card, Form, Input, Select } from "antd";

// ---------- import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";

function IdntityVerification() {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Create Job > Identity Verification">
        <div className="flex gap-4">
          <button className="btn btn-blue">Continue</button>
          <button className="btn btn-blue">Create Job</button>
        </div>
      </LayoutHeading>

      {/* ------- identity ferification form ------- */}
      <Card className="py-12 md:px-8 px-5 mt-8">
        <Form form={form} name="identity-form" layout="vertical">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Form.Item name="firstname" label="First name">
                <Input placeholder="First name" size="large" />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input
                  placeholder="you@company.com"
                  size="large"
                  type="email"
                />
              </Form.Item>
              <Form.Item name="type" label="ID Type">
                <Select size="large">
                  <Option value="NIN">NIN</Option>
                </Select>
              </Form.Item>
              <Form.Item name="information" label="Addtional information">
                <Input.TextArea className="resize-none h-[116px]" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="lastname" label="Last name">
                <Input placeholder="Last name" size="large" />
              </Form.Item>
              <Form.Item name="number" label="Phone number">
                <Input placeholder="+1 (555) 000-0000" size="large" />
              </Form.Item>
              <Form.Item name="idnumber" label="ID Number">
                <Select size="large">
                  <Option value="id">Id Verification</Option>
                </Select>
              </Form.Item>
              <Form.Item name="gender" label="Gender">
                <Select size="large">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
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

export default IdntityVerification;
