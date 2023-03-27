// ------------- import external dependencies -------------
import { Card, Form, Input, Upload } from "antd";

// ---------- import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import { ReactComponent as Attachment } from "../../assets/svg/attachment.svg";
import { UploadWrapper } from "./businessVerification";

function BusinessVerificationUpload() {
  const [form] = Form.useForm();

  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Business Verification > Document Upload" />

      {/* ------- identity verification form ------- */}
      <Card className="py-6 md:px-8 px-5 mt-8" title="Contact Person’s Name">
        <Form form={form} name="identity-form" layout="vertical">
          <div className="grid md:grid-cols-2 md:gap-12">
            <div>
              <Form.Item name="firstname" label="Contact Person’s Name">
                <Input placeholder="First name" size="large" />
              </Form.Item>
              <Form.Item name="company" label="Company">
                <Input placeholder="Airtel Nigeria" size="large" type="text" />
              </Form.Item>
              <Form.Item
                name="financial"
                label="Financial document"
                className=""
              >
                <Upload>
                  <UploadWrapper>
                    <div></div>
                    <Attachment />
                  </UploadWrapper>
                </Upload>
              </Form.Item>
              <Form.Item
                name="stakeholder"
                label="Stakeholder document"
                className=""
              >
                <Upload>
                  <UploadWrapper>
                    <div>you@company.com</div>
                    <Attachment />
                  </UploadWrapper>
                </Upload>
              </Form.Item>
              <Form.Item name="cac" label="CAC document" className="">
                <Upload>
                  <UploadWrapper>
                    <div></div>
                    <Attachment />
                  </UploadWrapper>
                </Upload>
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <button className="btn btn-blue font-medium">SUBMIT</button>
          </div>
        </Form>
      </Card>
    </>
  );
}

export default BusinessVerificationUpload;
