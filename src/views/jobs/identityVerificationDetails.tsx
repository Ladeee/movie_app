// ------------ import external dependencies -------------
import { Card } from "antd";

// ------------ import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";

function IdentityVerificationDetails() {
  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Identity Verification> Details " />

      <Card
        className=" mt-12"
        title="VERIFICATION DETAILS"
        extra={
          <button className="btn btn-blue min-w-[200px]">
            Download Report
          </button>
        }
      ></Card>
    </>
  );
}

export default IdentityVerificationDetails;
