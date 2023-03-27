import { Table } from "antd";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LayoutHeading from "../../components/LayoutHeading";
import Column from "antd/es/table/Column";
import { ReactComponent as Filter } from "../../assets/svg/filter.svg";
import {
  BottomLine,
  TableWrapper,
} from "../companySettings/components/Tabulate";

const Messages = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([{}]);
  const chatData = [
    {
      messageId: "210",
      date: "23-08-2021",
      subject: "Invalid Details",
      message:
        "The details for the address verification is not available in...",
      sender: "Sunday Oliseh",
      log: "sent",
    },
    {
      messageId: "211",
      date: "22-08-2021",
      subject: "Change Title",
      message: "The title for the address verification is not correct in...",
      sender: "James Edward",
      log: "received",
    },
  ];

  const getChats = async () => {
    setData(chatData);
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <>
      {/* ------- The Heading region -------- */}
      <LayoutHeading heading="Message > Message History">
        <NavLink
          to="create"
          className="btn btn-blue font-montserrat text-center"
        >
          New Message
        </NavLink>
      </LayoutHeading>

      {/* ------- The table section ------- */}
      <TableWrapper className="mt-16 bg-white-50 border-[1px] rounded-md flex flex-col">
        <BottomLine className="flex w-full justify-between items-center px-10 py-5 border-b-[1px]">
          <h2 className="font-montserrat text-blue-100 text-lg text-center">
            All
          </h2>
          <button className="btn flex justify-between">
            <span>Filter</span>
            <Filter />
          </button>
        </BottomLine>
        <div className="w-full overflow-x-auto">
          <Table
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => navigate(`chat/${record.messageId}`),
              };
            }}
          >
            <Column title="Message ID" dataIndex="messageId" key="messageId" />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Subject" dataIndex="subject" key="subject" />
            <Column title="Message" dataIndex="message" key="message" />
            <Column title="Sender" dataIndex="sender" key="sender" />
          </Table>
        </div>
      </TableWrapper>
    </>
  );
};

export default Messages;
