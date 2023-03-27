import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import LayoutHeading from "../../components/LayoutHeading";
import { Option } from "antd/es/mentions";
import { ReactComponent as Attachment } from "../../assets/svg/attachment.svg";
import { ReactComponent as Send } from "../../assets/svg/send.svg";
import {
  BottomLine,
  TableWrapper,
} from "../companySettings/components/Tabulate";
import { NavLink } from "react-router-dom";

const Request = () => {
  // List of users to render in...
  // ...recepient select field
  const categories = ["Banking", "Oil and gas", "Education"];

  return (
    <>
      {/* ------- The Header ------- */}
      <LayoutHeading heading="Support > Create Support Request">
        <NavLink to="" className="btn btn-blue font-montserrat text-center">
          FAQ
        </NavLink>
      </LayoutHeading>

      {/* ------- The Messaging section -------- */}
      <TableWrapper className="mt-16 w-full bg-white-50 border-[1px] rounded-md flex flex-col">
        <BottomLine className="px-10 py-5 border-b-[1px]">
          <h2 className="font-montserrat font-semibold text-lg">Message</h2>
        </BottomLine>
        <div className="px-5 lg:px-10 py-5">
          <form className="bg-gray-100 px-4 py-8 flex flex-col gap-8 rounded-md">
            <Select placeholder="Select category">
              {categories.map((category: string) => {
                return <Option value={category}>{category}</Option>;
              })}
            </Select>
            <TextArea className="h-52" placeholder="Start typing..." required />
            <div className="w-full flex justify-between items-center">
              <label htmlFor="attachment">
                <Attachment />
              </label>
              <input id="attachment" type="file" className="hidden" />
              <button className="border-none p-2 bg-gray-200 rounded-md">
                <Send />
              </button>
            </div>
          </form>
        </div>
      </TableWrapper>
    </>
  );
};

export default Request;
