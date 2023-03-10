// import external dependencies
import { Card, DatePicker } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import type { DatePickerProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

// import internal dependencies
import Filter from "../../../components/Filter";
import {
  AccountContainer,
  Headers,
  TableBox,
  TableDisplay,
} from "../account.styled";

// Defined the key types

interface DataType {
  key: React.Key;
  accountId: string;
  dateCreated: number;
  accountName: string;
  accountType: string;
  accountTier: string;
  state: string;
}

// Table headings defined
const columns: ColumnsType<DataType> = [
  {
    title: "Account ID",
    dataIndex: "accountId",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
  {
    title: "Account Name",
    dataIndex: "accountName",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
  {
    title: "Account Type",
    dataIndex: "accountType",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
  {
    title: "Account Tier",
    dataIndex: "accountTier",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
  {
    title: "State",
    dataIndex: "state",
    render: (text: string, record: DataType) => (
      <Link className="link" to="payment-status">
        {text}
      </Link>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    accountId: "210",
    dateCreated: 2 - 10 - 2022,
    accountName: "Anthony Ezechuku",
    accountType: "Savings",
    accountTier: "Tier 3",
    state: "Lagos",
  });
}

export default function Account() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [loading, setLoading] = useState(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // date picker
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <AccountContainer>
      <Headers>
        <div className="flex items-center gap-2 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">Account</h2>
        </div>
        <div className="flex items-center gap-5">
          <Link to="">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)]">
              Fund Wallet
            </button>
          </Link>
          <Link to="">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)]">
              Generate Invoice
            </button>
          </Link>
        </div>
      </Headers>

      <TableBox>
        <Card
          title={
            <div className="flex justify-between items-center">
              <div>
                {" "}
                <DatePicker
                  onChange={onChange}
                  placeholder="Choose Start date"
                />
              </div>
              <div>
                {" "}
                <DatePicker onChange={onChange} placeholder="Choose End date" />
              </div>
              {/* <div> */}
              <div className="csv py-5 pr-5 flex justify-end items-center gap-6">
                <button id="button" className="btn btn-blue">
                  CSV Download
                </button>
                <span>
                  <Filter />
                </span>
              </div>
            </div>
          }
        >
          {/* Table */}

          <div className="table">
            <TableDisplay>
              <div>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </div>
              <Link to="payment-status" className="link">
                <Table
                  className="whitespace-nowrap text-xs font-normal border"
                  rowClassName="tablerow"
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                />
              </Link>
            </TableDisplay>
          </div>
        </Card>
      </TableBox>
    </AccountContainer>
  );
}
