// import external dependencies
import { Card } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

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
  transactionDate: string;
  jobType: string;
  time: string;
  action: string;
}

// Table headings defined
const columns: ColumnsType<DataType> = [
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    render: (text: string, record: DataType) => (
      <Link className="link" to="">
        {text}
      </Link>
    ),
  },
  {
    title: "Job Type",
    dataIndex: "jobType",
    render: (text: string, record: DataType) => (
      <Link className="link" to="">
        {text}
      </Link>
    ),
  },
  {
    title: "Time",
    dataIndex: "time",
    render: (text: string, record: DataType) => (
      <Link className="link" to="">
        {text}
      </Link>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text: string, record: DataType) => (
      <Link className="link" to="">
        {text}
      </Link>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    transactionDate: "August 30, 2022",
    jobType: "Deposit",
    time: "8:30",
    action: "NGN 10,300",
  });
}

export default function TransactionHistory() {
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
          <div className="flex items-center gap-1 text-[var(--grey900)]">
            <h2 className="text-lg md:text-2xl font-semibold">Transactions</h2>
            <IoIosArrowForward className="icon" />
            <p className="text-lg md:text-2xl font-semibold">
              Transactions History
            </p>
          </div>
          <div
            className="wallet-balance flex flex-col justify-center gap-2.5 border border-solid border-[var(--grey200)] bg-[var(--white50)] pl-4"
            id="history-wallet"
          >
            <h3 className="text-sm font-semibold">Wallet Balance</h3>
            <div className="font-semibold">
              NGN <span className=" text-lg sm:text-xl font-bold">76,000</span>
            </div>
          </div>
        </div>
      </Headers>

      <TableBox>
        <Card
          className="card"
          title={
            <div className="csv py-5 pr-5 flex justify-between items-center">
              <p className="text-base font-semibold">Transactions</p>
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
                  pagination={false}
                />
              </Link>
            </TableDisplay>
          </div>
        </Card>
      </TableBox>
    </TransactionsContainer>
  );
}
