// import external dependencies
import { Card } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Link } from "react-router-dom";

// import internal dependencies
import Filter from "../../../components/Filter";
import {
  TransactionsContainer,
  Headers,
  TableBox,
  TableDisplay,
} from "../transactions.styled";

// Defined the key types

interface DataType {
  key: React.Key;
  jobId: string;
  dateCreated: number;
  entityToBeVerified: string;
  jobType: string;
  createdBy: string;
  status: string;
  verificationStatus: string;
  paymentStatus: string;
}

// Table headings defined
const columns: ColumnsType<DataType> = [
  {
    title: "Job ID",
    dataIndex: "jobId",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Entity to be verified",
    dataIndex: "entityToBeVerified",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Job Type",
    dataIndex: "jobType",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Verification Status",
    dataIndex: "verificationStatus",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
    render: (text: string, record: DataType) => (
      <Link className="link" to="transaction-history">
        {text}
      </Link>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    jobId: "210",
    dateCreated: 2 - 10 - 2022,
    entityToBeVerified: "NIN",
    jobType: "ID Verification",
    createdBy: "Paul Kagame",
    status: "Completed",
    verificationStatus: "pending",
    paymentStatus: "Paid",
  });
}

export default function Transaction() {
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

  return (
    <TransactionsContainer>
      <Headers>
        <div className="flex flex-col items-baseline gap-4 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">Transactions</h2>
          <div className="wallet-balance flex flex-col justify-center gap-2.5 bg-[var(--blue50)] pl-4">
            <h3 className=" text-xs sm:text-sm font-semibold">
              Wallet Balance
            </h3>
            <div className="font-semibold">
              NGN{" "}
              <span className=" text-base sm:text-xl font-bold">76,000</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link to="">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)]">
              Transaction history
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
            <div className="csv py-5 pr-5 flex justify-end items-center gap-6">
              <button id="button" className="btn btn-blue">
                CSV Download
              </button>
              <span>
                <Filter />
              </span>
            </div>
          }
        >
          {/* Table */}

          <div className="table">
            <TableDisplay>
              <div>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </div>
              <Link to="" className="link">
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
    </TransactionsContainer>
  );
}
