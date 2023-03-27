import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import LayoutHeading from "../../components/LayoutHeading";
import { Option } from "antd/es/mentions";
import { ReactComponent as Attachment } from "../../assets/svg/attachment.svg";
import { ReactComponent as Send } from "../../assets/svg/send.svg";
import {
  BottomLine,
  TableWrapper,
} from "../companySettings/components/Tabulate";

const CreateMessage = () => {
  // List of users to render in...
  // ...recepient select field
  const users = ["Ariana Grande", "James Chadwick", "Erwin Goldstein"];

  return (
    <>
      {/* ------- The Header ------- */}
      <LayoutHeading heading="Message > Create Message" />

      {/* ------- The Messaging section -------- */}
      <TableWrapper className="mt-16 w-full bg-white-50 border-[1px] rounded-md flex flex-col">
        <BottomLine className="px-10 py-5 border-b-[1px]">
          <h2 className="font-montserrat font-semibold text-lg">
            Create Message
          </h2>
        </BottomLine>
        <div className="px-5 lg:px-10 py-5">
          <form className="bg-gray-100 px-4 py-8 flex flex-col gap-8 rounded-md">
            <Select placeholder="Recepient">
              {users.map((user: string) => {
                return <Option value="Ariana Grande">{user}</Option>;
              })}
            </Select>
            <Input placeholder="Enter subject" required />
            <TextArea
              className="h-52"
              placeholder="Type your message here or attach your file"
              required
            />
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

export default CreateMessage;
