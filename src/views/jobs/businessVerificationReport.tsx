// ------------ import external dependencies -------------
import styled from "styled-components";
import { Card, Input } from "antd";
import { StarFilled } from "@ant-design/icons";

// ------------ import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import CirclePlaceholder from "../../components/CirclePlaceholder";
import Attachment from "../../components/AttachmentIndicator";
import DummyImg from "../../assets/dummy.png";
import PdfFile from "../../assets/pdffile.png";
import { ReactComponent as Signature } from "../../assets/svg/signature.svg";
import { DetailsRow } from "./businessVerificationDetails";

function BusinessVerificationReport() {
  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="View Job > Business Verification > Report" />

      <Wrapper
        className=" mt-12"
        title="JOB DETAILS"
        extra={
          <span className="font-inter font-semibold">
            Date Requested: Fri, Feb 21, 2022
          </span>
        }
      >
        <div className="grid md:grid-cols-2 md:gap-20 gap-5">
          <Card>
            {/* ------- job credentials ------- */}
            <div className="flex gap-4 items-end">
              <CirclePlaceholder />
              <div>
                <span className="font-semibold block">Contact person</span>
              </div>
            </div>

            {/* ------ job infos ------ */}
            <div className="mt-12">
              <DetailsRow>
                <span className="title">Is the business name correct?</span>
                <span className="info text-purple-400 font-bold">Yes</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">
                  Is the company registered with CAC:
                </span>
                <span className="info text-purple-400 font-bold">Yes</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">
                  Is the RC number correct? BN33455:
                </span>
                <span className="info text-purple-400 font-bold">Yes</span>
              </DetailsRow>
              <DetailsRow className="block">
                <DetailsRow className="border-b-0 pl-0">
                  <span className="title">
                    Were you able to locate the business?:
                  </span>
                  <span className="info text-purple-400 font-bold">Yes</span>
                </DetailsRow>
                <span className="font-montserrat font-light">
                  Address: 7B Kafi street, Alausa Ikeja, Lagos
                </span>
              </DetailsRow>
              <DetailsRow className="block">
                <DetailsRow className="border-b-0 pl-0">
                  <span className="title">
                    Is the contact person’s name correct?:
                  </span>
                  <span className="info text-purple-400 font-bold">Yes</span>
                </DetailsRow>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="font-inter font-medium text-black-50">
                      First name:
                    </span>
                    <span className="font-inter font-medium text-black-50">
                      Toni
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-inter font-medium text-black-50">
                      Last name:
                    </span>
                    <span className="font-inter font-medium text-black-50">
                      Kroos
                    </span>
                  </div>
                </div>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Role of the contact person?:</span>
                <span className="info text-purple-400 font-bold">HR</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Number of staff in the company:</span>
                <span className="info text-purple-400 font-bold">23</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">
                  Number of shareholders in the company?:
                </span>
                <span className="info text-purple-400 font-bold">4</span>
              </DetailsRow>
              <DetailsRow className="block">
                <DetailsRow className="border-b-0 pl-0">
                  <span className="title">Percentage of shareholders?</span>
                </DetailsRow>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="font-inter text-black-50">Mr Leo:</span>
                    <span className="font-inter text-black-50">40.50%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-inter text-black-50">
                      Chief Adewale:
                    </span>
                    <span className="font-inter text-black-50">25.50</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="font-inter text-black-50">
                      Mrs Helen Carter:
                    </span>
                    <span className="font-inter text-black-50">21.5%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-inter text-black-50">
                      PQRS Holdings:
                    </span>
                    <span className="font-inter text-black-50">12.5%</span>
                  </div>
                </div>
              </DetailsRow>
              <DetailsRow className="block">
                <DetailsRow className="border-b-0 pl-0">
                  <span className="title">Auditor’s details</span>
                </DetailsRow>
                <DetailsRow className="border-b-0 pl-0">
                  <span className="font-inter title">Auditor’s name:</span>
                  <span className="font-semibold font-inter info">
                    Sergio Ramos
                  </span>
                </DetailsRow>
                <DetailsRow className="border-b-0 pl-0">
                  <span className="font-inter title">
                    Auditor’s phone mumber:
                  </span>
                  <span className="font-semibold font-inter info">
                    +23476377373883
                  </span>
                </DetailsRow>
              </DetailsRow>
              <DetailsRow className="block">
                <Signature />
                <span className="font-inter title">Signature</span>
              </DetailsRow>
              <DetailsRow>
                <span className="text-black-50 font-bold title">
                  Verification Status:
                </span>
                <span className="info text-green-500">Successful</span>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title">Agent comment</span>
                <span className="info">
                  With the growing population, demand for agriculture is also
                  increasing. To meet the demands, farmers have switched to
                  advanced ways and machinery.{" "}
                </span>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title">Agent Information</span>
                <div className="flex gap-7 items-center justify-between">
                  <div>
                    <div className="flex gap-5 mt-4">
                      <span className="font-inter font-light">
                        Verification carried out by:
                      </span>
                      <span className="font-inter font-semibold">
                        Lionel Messi
                      </span>
                    </div>
                    <div className="mt-4 flex gap-5">
                      <span className="font-inter font-light text-ash-200">
                        Date carried out:
                      </span>
                      <span className="font-inter font-semibold">
                        Fri, Feb 22, 2022
                      </span>
                    </div>
                    <div className="mt-4 flex gap-5">
                      <span className="font-inter font-light text-ash-200">
                        Latitude.Longitude:
                      </span>
                      <span className="font-inter font-semibold">
                        6.58324,3,347845
                      </span>
                    </div>
                  </div>
                  <CirclePlaceholder className="h-[75px] w-[75px] flex items-center justify-center">
                    <img src={DummyImg} alt="business logo" />
                  </CirclePlaceholder>
                </div>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title">Please Rate the Job</span>
                <div className="mt-4 flex gap-2">
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                </div>
                <div className="mt-4 flex gap-5">
                  <span className="font-inter font-light text-ash-200">
                    Comment:
                  </span>
                  <span className="font-inter font-semibold">
                    Incomplete address
                  </span>
                </div>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title text-red-100 font-bold">
                  Verification Details
                </span>
                <div className="mt-4">
                  <span className="text-black-50 font-bold">
                    Customer care comment
                  </span>
                  <Input.TextArea className="resize-none" />
                </div>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title">Agent Information</span>
                <div className="mt-4 flex gap-5">
                  <span className="font-inter font-light text-ash-200">
                    Verification Done By:
                  </span>
                  <span className="font-inter">Nester Verify</span>
                </div>
                <div className="mt-4 flex gap-5">
                  <span className="font-inter font-light text-ash-200">
                    Verification Reviewd By:
                  </span>
                  <span className="font-inter">Uche Jombo</span>
                </div>
              </DetailsRow>
            </div>
          </Card>

          {/* ------- status ------- */}
          <div>
            <div className="flex justify-end items-center gap-2">
              <span className="font-semibold text-grey-500">Job Status:</span>
              <span className="font-semibold text-green-500">Ongoing</span>
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <div>
                  <span>CAC docs</span>
                  <PdfFileWrap>
                    <img src={PdfFile} alt="cac docs" />
                  </PdfFileWrap>
                </div>
                <div>
                  <span>Financial docs</span>
                  <PdfFileWrap>
                    <img src={PdfFile} alt="cac docs" />
                  </PdfFileWrap>
                </div>
              </div>
              <div className="mt-8">
                <Attachment name="Office interior" />
              </div>
              <div className="mt-8">
                <Attachment name="Front office" />
              </div>
              <div className="mt-8">
                <Attachment name="Side ofiice" />
              </div>
              <div className="mt-8">
                <Attachment name="Side ofiice" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-between items-center">
          <button className="btn btn-red">Reject</button>
          <button className="btn btn-blue ">ACCEPT/PRINT</button>
        </div>
      </Wrapper>
    </>
  );
}

export default BusinessVerificationReport;

export const PdfFileWrap = styled.div`
  background: var(--ash100);
  padding: 1rem;
  width: 80px;
`;

const Wrapper = styled(Card)`
  @media print {
    @page {
      size: A4 portrait;
    }
    width: 100vw;
    height: 100vh;
  }
`;
