import { Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LayoutHeading from "../../components/LayoutHeading";
import Column from "antd/es/table/Column";
// import { ReactComponent as Attachment } from "../../assets/svg/attachment.svg";
import { ReactComponent as Filter } from "../../assets/svg/filter.svg";
import {
  BottomLine,
  TableWrapper,
} from "../companySettings/components/Tabulate";

const Support = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState<any>([{}]);
  const [filter, setFilter] = useState<string>("all");

  const columns = [
    {
      title: "",
      dataIndex: "photoURL",
      render: (tag: any) => {
        return (
          <div className="w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
            <img src={tag} className="w-full" />
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "name",
    },
    {
      title: "Incident ID",
      dataIndex: "incidentId",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (tag: any) => {
        const color = tag?.toLowerCase().includes("completed" || "resolved")
          ? "#4AA785"
          : tag?.toLowerCase().includes("in progress")
          ? "#8A8CD9"
          : tag?.toLowerCase().includes("closed")
          ? "#A3A3A3"
          : tag?.toLowerCase().includes("failed")
          ? "#CD0303"
          : tag?.toLowerCase().includes("ongoing")
          ? "#CD0303"
          : "#FFC555";
        const style = { color };
        return (
          <Tag style={style} className="bg-transparent border-none">
            &#8226; {tag}
          </Tag>
        );
      },
    },
  ];

  const incidenceData = [
    {
      name: "John Wick",
      photoURL:
        "data:image/jpeg;base64,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",
      incidentId: "210",
      date: "23 June",
      subject: "Invalid Details",
      message: "Hello, I am finding it really ",
      category: "Education",
      status: "pending",
    },
    {
      name: "Rick Morty",
      photoURL:
        "data:image/jpeg;base64,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",
      incidentId: "211",
      date: "22 June",
      subject: "Change Title",
      message: "Hello, I am finding it really ",
      category: "Sports",
      status: "in progress",
    },
  ];

  const getIncidence = async () => {
    setData(incidenceData);
  };

  const filterData = (filter: string) => {
    setFilter(filter);
    if (filter === "all") {
      setData(incidenceData);
      return false;
    }
    const filtered = incidenceData.filter((data: any) => {
      return data.status === filter;
    });
    console.log(filtered);
    setData(filtered);
  };

  useEffect(() => {
    getIncidence();
  }, []);

  return (
    <>
      {/* ------- The Heading region -------- */}
      <LayoutHeading heading="Support">
        <NavLink to="" className="btn btn-blue font-montserrat text-center">
          FAQ
        </NavLink>
      </LayoutHeading>

      <NavLink
        to="request"
        className="flex lg:hidden btn btn-blue w-[30%] mt-5"
      >
        Request Support
      </NavLink>

      {/* ------- The table section ------- */}
      <div className="">
        <TableWrapper className="mt-16 bg-white-50 border-[1px] rounded-md flex flex-col">
          <BottomLine className="flex w-full justify-between items-center px-3 lg:px-10 py-5 border-b-[1px]">
            <div className="flex gap-5">
              <span
                onClick={() => filterData("all")}
                className={`${
                  filter === "all"
                    ? "text-blue-100 font-semibold"
                    : "text-gray-500 font-normal"
                } cursor-pointer font-montserrat text-sm text-center`}
              >
                All
              </span>
              <span
                onClick={() => filterData("resolved")}
                className={`${
                  filter === "resolved"
                    ? "text-blue-100 font-semibold"
                    : "text-gray-500 font-normal"
                } hidden lg:block cursor-pointer font-montserra0 text-sm text-center`}
              >
                Resolved
              </span>
              <span
                onClick={() => filterData("in progress")}
                className={`${
                  filter === "in progress"
                    ? "text-blue-100 font-semibold"
                    : "text-gray-500 font-normal"
                } hidden lg:block cursor-pointer font-montserrat text-sm text-center`}
              >
                In Progress
              </span>
              <span
                onClick={() => filterData("pending")}
                className={`${
                  filter === "pending"
                    ? "text-blue-100 font-semibold"
                    : "text-gray-500 font-normal"
                } hidden lg:block cursor-pointer font-montserrat text-sm text-center`}
              >
                Pending
              </span>
            </div>
            <div className="flex gap-2">
              <NavLink to="request" className="hidden lg:flex btn btn-blue">
                Request Support
              </NavLink>
              <button className="flex btn justify-between">
                <span>Filter</span>
                <Filter />
              </button>
            </div>
          </BottomLine>
          <div className="w-full overflow-x-auto">
            <Table columns={columns} dataSource={data} className="capitalize">
              <Column title="" dataIndex="name" key="name" />
              <Column
                title="Incident ID"
                dataIndex="incidentId"
                key="incidentId"
              />
              <Column title="Category" dataIndex="category" key="category" />
              <Column title="Subject" dataIndex="subject" key="subject" />
              <Column title="" dataIndex="message" key="message" />
              <Column title="Status" dataIndex="status" key="status" />
              <Column title="Date Created" dataIndex="date" key="date" />
            </Table>
          </div>
        </TableWrapper>
      </div>
    </>
  );
};

export default Support;
