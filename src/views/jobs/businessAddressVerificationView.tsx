// ------------ import external dependencies -----------
import { Card, Input } from "antd";
import styled from "styled-components";

// ----------- import internal dependencies -----------
import LayoutHeading from "../../components/LayoutHeading";
import CirclePlaceholder from "../../components/CirclePlaceholder";

function BusinessAddressVerificationView() {
  const { TextArea } = Input;

  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Create Job > Business Adddress Verification" />

      {/* ------ business identification details -------- */}
      <Card extra={<button className="btn btn-blue">Download Report</button>}>
        <JobInfoWrapper className="md:w-[40%]">
          <div className="flex gap-4 items-center">
            <CirclePlaceholder />
            <div>
              <span className="block font-inter text-2xl">
                JOB ID: <span className="font-semibold">33455</span>
              </span>
              <span className="font-semibold">Date Created: 8th June 2022</span>
            </div>
          </div>
          <div className=" mt-10">
            <JobDetail>
              <span>Job Status:</span>
              <span className="text-brown-100">Ongoing</span>
            </JobDetail>
            <JobDetail>
              <span>Verification status:</span>
              <span className="text-brown-100">Verified</span>
            </JobDetail>
            <JobDetail>
              <span>Payment Status:</span>
              <span className="text-green-500">Paid</span>
            </JobDetail>
          </div>
        </JobInfoWrapper>

        {/* ------ business address details ------ */}
        <BusinessWrap>
          <h2>Business Address</h2>
        </BusinessWrap>
        <JobInfoWrapper className="rounded-none">
          <div className="flex justify-between">
            <div className="w-[45%]">
              <BusinessInfo>
                <span>Job Type:</span>
                <span>BUSINESS VERIFICATION</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Business Name:</span>
                <span>Adamu</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Contact Name:</span>
                <span>Mohammed</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Phone Number:</span>
                <span>Mohammed</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Address:</span>
                <span>73 Allen Ave, Allen 101233, Ikeja.</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>State:</span>
                <span>Lagos</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>City:</span>
                <span>Ikeja</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Closest Landmark:</span>
                <span>MTN Allen Centre</span>
              </BusinessInfo>
            </div>
            <div className="w-[45%]">
              <BusinessInfo>
                <span>Longitude & Latitude:</span>
                <span>N/A</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Agent Name:</span>
                <span>Sani Abacha</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Expected Date of Completion:</span>
                <span>N/A</span>
              </BusinessInfo>
              <BusinessInfo>
                <span>Actual Date of Completion:</span>
                <span>Sani Abacha</span>
              </BusinessInfo>
            </div>
          </div>
          <div>
            <span className="font-inter font-bold">
              Additional Information:
            </span>
            <TextArea rows={4} className="resize-none" />
          </div>
        </JobInfoWrapper>
      </Card>
    </>
  );
}

export default BusinessAddressVerificationView;

// ------- component styles -------
const JobInfoWrapper = styled.div`
  border: 1px solid var(--ash50);
  border-radius: 10px;
  padding: 1.25rem;
`;

const JobDetail = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid var(--ash50);
  padding-bottom: 0.5rem;
  margin-top: 0.8rem;

  & > span {
    font-weight: 600;
    font-family: "Inter";

    &:first-child {
      color: var(--grey400);
      font-weight: 500;
    }
  }
`;

const BusinessWrap = styled.div`
  background: var(--ash100);
  padding: 0.5rem 2rem;
  margin-top: 1.8rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  h2 {
    font-size: 1rem;
    color: var(--purple300);
    border-bottom: 2px solid var(--purple300);
    width: fit-content;
  }
`;

const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 10%;

  & > span {
    font-family: "Inter";
    width: calc(100% / 2 - 10% / 2);
    &:first-child {
      font-weight: 700;
    }
  }
`;
