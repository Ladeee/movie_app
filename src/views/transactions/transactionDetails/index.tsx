import { Card } from "antd";
import { Link } from "react-router-dom";
import { TransactionDetailsContainer, Headers } from "../transactions.styled";
import { IoIosArrowForward } from "react-icons/io";

export default function TransactionDetails() {
  return (
    <TransactionDetailsContainer>
      <Headers>
        <div className="flex items-center gap-1 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">Transactions</h2>
          <IoIosArrowForward className="icon" />
          <p className="text-lg md:text-2xl font-semibold">
            Transactions Details
          </p>
        </div>
        <div></div>
      </Headers>
      <Card title={<p>VERIFICATION DETAILS</p>}>
        <Card
          className="history-card"
          title={
            <div className="pt-4 pb-4">
              <div className="flex gap-6 items-center">
                <p className="font-normal text-lg text-[var(--grey400)]">
                  JOB ID:
                </p>
                <p className="font-bold text-black text-lg">#232</p>
              </div>

              <div className="flex gap-6 items-center mt-4">
                <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
                  Date Created:
                </p>
                <p className="text-xs sm:text-base font-bold text-black">
                  8th June, 2022
                </p>
              </div>
            </div>
          }
        >
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Date Created:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">
              24-03-2021
            </p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Job Type:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">
              Identity Verification
            </p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Identity Type:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">NIN</p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Name:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">
              Antonette John
            </p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Guarantor:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">
              00000000000000000
            </p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Job Assignment Type:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">
              Jan 12 2022
            </p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Amount Paid:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">NGN 850</p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Payment Status:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">Paid</p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Verification Status:
            </p>
            <p className="text-xs sm:text-base font-bold text-black">Failed</p>
          </div>
          <div className="history-details flex gap-6 items-center">
            <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
              Job Status:
            </p>
            <p className="font-bold text-emerald-500 text-base">Completed</p>
          </div>
        </Card>

        <div className="history-btn flex items-center justify-between">
          <button className="btn btn-blue text-[var(--white50)]">PRINT</button>

          <Link to="/company/users/subuser">
            <button className="btn bg-gray-300">BACK</button>
          </Link>
        </div>
      </Card>
    </TransactionDetailsContainer>
  );
}
