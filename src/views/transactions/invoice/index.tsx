import { Card } from "antd";
import {
  InvoiceContainer,
  Headers,
  HistoryBox,
  JobDetails,
} from "../transactions.styled";
import { IoIosArrowForward } from "react-icons/io";
import NesterLogo from "../../../assets/images/transactions/nesterLogo.png";

export default function Invoice() {
  return (
    <InvoiceContainer>
      <Headers>
        <div className="flex items-center gap-1 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">Transactions</h2>
          <IoIosArrowForward className="icon" />
          <p className="text-lg md:text-2xl font-semibold">Invoice</p>
        </div>
        <div></div>
      </Headers>
      <Card title={<p>INVOICE: 000003</p>}>
        <HistoryBox>
          <Card
            title={
              <div>
                <img
                  src={NesterLogo}
                  alt="Nester verify Brand logo"
                  className="history-img"
                />
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
                Company Name:
              </p>
              <p className="text-xs sm:text-base font-bold text-black">
                CR7 Limited
              </p>
            </div>
            <div className="history-details flex gap-6 items-center">
              <p className="text-xs sm:text-base font-semibold text-[var(--grey400)]">
                Job Assignment Date Range:
              </p>
              <p className="text-xs sm:text-base font-bold text-black">
                24/03/2021 - 30/03/2022
              </p>
            </div>
          </Card>
        </HistoryBox>

        <JobDetails className="border border-solid border-gray-100">
          <div className="header bg-black-50 flex items-center text-[var(--white50)] h-12 flex-1">
            <p className="numbers font-bold text-base">#</p>
            <p className="details font-bold text-base">Job Details</p>
            <p className="quantity font-bold text-base">Quantity</p>
            <p className="unit font-bold text-base">Unit Price</p>
            <p className="cost font-bold text-base">Cost</p>
          </div>
          <div className="row flex items-center">
            <div className="numbers">
              <p className="font-semi-bold mt-8">1</p>
              <p className="font-semi-bold mt-10">2</p>
              <p className="font-semi-bold mt-10">3</p>
              <p className="font-semi-bold mt-10">4</p>
            </div>

            <div className="details">
              <p className="font-bold mt-8">Address Verification</p>
              <p className="font-bold mt-10">Last Name:</p>
              <p className="font-bold mt-10">Address:</p>
              <p className="font-bold mt-10">State:</p>
            </div>

            <div className="quantity">
              <p className="mt-8">100</p>
              <p className="mt-10">50</p>
              <p className="mt-10">20</p>
              <p className="mt-10">20</p>
            </div>

            <div className="unit">
              <p className="mt-8">850</p>
              <p className="mt-10">1,000</p>
              <p className="mt-10">2,000</p>
              <p className="mt-10">500</p>
            </div>

            <div className="cost">
              <p className="mt-8">85,000</p>
              <p className="mt-10">50,000</p>
              <p className="mt-10">40,000</p>
              <p className="mt-10">10,000</p>
            </div>
          </div>

          <div className="row px-4 sm:px-12 mt-10 flex items-center justify-between font-bold border-none">
            <div className="acc-key">
              <p>Total</p>
              <p className="mt-10">VAT(7.5%)</p>
              <p className="mt-10">Balance Due</p>
              <p className="mt-10">Payment Status</p>
            </div>
            <div className="acc-value">
              <p className="text-indigo-500">NGN 185,000.00</p>
              <p className="mt-10 text-indigo-500">NGN 10,000.00</p>
              <p className="mt-10 text-indigo-500">NGN 195,000.00</p>
              <p className="mt-10 text-indigo-500">Not Paid</p>
            </div>
          </div>

          <div className="header flex items-center bg-black-50 text-[var(--white50)] h-12 flex-1 font-bold text-base mt-6">
            Bank Details
          </div>
          <div className="account-row mt-6 flex items-center">
            <div className="acc-key">
              <p>Bank Name</p>
              <p className="mt-10">Account Number</p>
              <p className="mt-10">Account Name</p>
            </div>
            <div className="acc-value ml-10">
              <p>CITY BANK</p>
              <p className="mt-10">2727262822</p>
              <p className="mt-10">Nester Verify</p>
            </div>
          </div>
        </JobDetails>
        <div>
          <button className="btn btn-blue text-[var(--white50)] mt-10">
            PRINT
          </button>
        </div>
      </Card>
    </InvoiceContainer>
  );
}
