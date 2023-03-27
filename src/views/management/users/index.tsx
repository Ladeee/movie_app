// importing external dependencies
import React, { useEffect, useState } from "react";
import { Table, Card } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

// importing internal dependencies
import Filter from "../../../components/Filter";
import {
  Headers,
  Activities,
  ActivitiesLog,
  TableandFilter,
  TableDisplay,
  UsersContainer,
  UsersWrapper,
} from "../management.styled";
import { Link } from "react-router-dom";

// Defined the key types

interface DataType {
  key: React.Key;
  subUsername: string;
  dateCreated: any;
  phoneNumber: number;
  roles: string;
  status: string;
}

// Table headings defined
const columns: ColumnsType<DataType> = [
  {
    title: "Sub User Name",
    dataIndex: "subUsername",
    render: (text: string, record: DataType) => (
      <Link className="link" to="subdetail">
        {text}
      </Link>
    ),
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    render: (text: string, record: DataType) => (
      <Link className="link" to="subdetail">
        {text}
      </Link>
    ),
  },
  {
    title: "Phone number",
    dataIndex: "phoneNumber",
    render: (text: string, record: DataType) => (
      <Link className="link" to="subdetail">
        {text}
      </Link>
    ),
  },
  {
    title: "Roles",
    dataIndex: "roles",
    render: (text: string, record: DataType) => (
      <Link className="link" to="subdetail">
        {text}
      </Link>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: string, record: DataType) => (
      <Link className="link" to="subdetail">
        {text}
      </Link>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    subUsername: "Anthony Ezechuku",
    dateCreated: "2-10-2022",
    phoneNumber: 9088774423,
    roles: "Sub User",
    status: "Active",
  });
}

// Dropdown items
const items = [
  {
    id: "0",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "1",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "2",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "3",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "4",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "5",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  {
    id: "6",
    label: <p>Edet Evelyn’s account was de-activated!</p>,
  },
  // {
  //   type: "divider",
  // },
];

export default function Users() {
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

  const [isVisible, setIsVisible] = useState(false);

  function handleTitleClick() {
    if (window.innerWidth <= 768) {
      setIsVisible(!isVisible);
    }
  }

  // This is used to track the screen window resize and prevent the need to reload before implementing the state changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <UsersContainer>
      <Headers>
        <div className="flex items-center gap-2 text-grey-900">
          <h2 className="text-lg md:text-2xl font-semibold">User Management</h2>
        </div>
        <div>
          <Link to="subuser">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
              Create
            </button>
          </Link>
        </div>
      </Headers>
      <UsersWrapper>
        <TableandFilter>
          <div className="csv py-5 pr-5 flex justify-end items-center gap-6">
            <button id="button" className="btn btn-blue">
              CSV Download
            </button>
            <span>
              <Filter />
            </span>
          </div>

          {/* Table */}
          <div className="table">
            <TableDisplay>
              <div>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </div>
              <Link to="subdetail" className="link">
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
        </TableandFilter>

        {/* Activity log */}
        <ActivitiesLog>
          <div>
            <div
              onClick={handleTitleClick}
              className="btn flex justify-between items-center bg-[var(--blue100)] text-[var(--white50)]"
            >
              Activity log
              <DownOutlined />
            </div>
            {isVisible || window.innerWidth > 768 ? (
              <Activities>
                {items.map((item, index) => (
                  <Card
                    key={item.id}
                    className={index % 2 === 0 ? "even" : "odd"}
                  >
                    <p className="text-sm md:text-lg lg:text-xs font-medium">
                      {item.label}
                    </p>
                  </Card>
                ))}
              </Activities>
            ) : null}
          </div>
        </ActivitiesLog>
      </UsersWrapper>
    </UsersContainer>
  );
}
