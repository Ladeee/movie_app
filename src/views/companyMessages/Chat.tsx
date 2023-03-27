import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LayoutHeading from "../../components/LayoutHeading";
import { ReactComponent as Attachment } from "../../assets/svg/attachment.svg";
import { ReactComponent as Send } from "../../assets/svg/send.svg";
import {
  BottomLine,
  TableWrapper,
} from "../companySettings/components/Tabulate";

const Chat = () => {
  const { pathname } = useLocation();
  const [messages, setMessages] = useState<any>(null);

  // Dummy messages data with IDs for two chats
  const messagesCollection: any = {
    210: {
      init: `Dear Sir,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus adipiscing
      eget ullamcorper est, massa posuere commodo euismod facilisi. Consequat at
      ullamcorper blandit vitae, tempor. Nulla tristique consectetur blandit at lobortis.
      Mauris, arcu lorem euismod eget. Consequat netus semper dolor turpis felis risus,
      feugiat habitant at. Nisi felis enim metus, aliquam sed. Sit lacus, tristique netus
      pretium. Adipiscing ridiculus amet dolor ipsum lacus. Dignissim dictum urna venenatis
      tristique massa ultrices tellus. Ac sed morbi tristique quam placerat auctor sagittis
      ullamcorper eleifend. Quis ullamcorper purus sit vitae aliquam, est. Tortor non, mi fermentum,
      volutpat nulla a risus. Faucibus mattis quis cursus aliquet at id.`,
      time: "2:22PM",
      subject: "Wrong Subject",
      messages: [
        {
          message: "Hello Mr. Thomas Amadi",
          sender: "them",
        },
        {
          message: "Hello. Good afternoon. How can I help you?",
          sender: "me",
        },
      ],
    },
    211: {
      init: `Dear Sir,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus adipiscing
      eget ullamcorper est, massa posuere commodo euismod facilisi. Consequat at
      ullamcorper blandit vitae, tempor. Nulla tristique consectetur blandit at lobortis.
      Mauris, arcu lorem euismod eget. Consequat netus semper dolor turpis felis risus,
      feugiat habitant at. Nisi felis enim metus, aliquam sed. Sit lacus, tristique netus
      pretium. Adipiscing ridiculus amet dolor ipsum lacus. Dignissim dictum urna venenatis
      tristique massa ultrices tellus. Ac sed morbi tristique quam placerat auctor sagittis
      ullamcorper eleifend. Quis ullamcorper purus sit vitae aliquam, est. Tortor non, mi fermentum,
      volutpat nulla a risus. Faucibus mattis quis cursus aliquet at id.`,
      time: "9:28AM",
      subject: "Slow Loading",
      messages: [
        {
          message: "I do not understand what this is...",
          sender: "them",
        },
        {
          message: "Good afternoon. I will expalain shortly",
          sender: "me",
        },
      ],
    },
  };

  // Chats data (for chats in preview)
  const chatData = [
    {
      messageId: "210",
      date: "23-08-2021",
      subject: "Invalid Details",
      message:
        "The details for the address verification is not available in...",
      sender: "Sunday Oliseh",
      log: "sent",
      attachment: (
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3885 5.69861L5.37743 13.8444C5.11221 14.1371 4.96971 14.5206 4.97943 14.9154C4.98916 15.3103 5.15035 15.6863 5.42966 15.9656C5.70896 16.2449 6.08497 16.4061 6.47984 16.4158C6.87471 16.4256 7.2582 16.2831 7.55091 16.0178L17.1008 6.33334C17.6312 5.74793 17.9162 4.98095 17.8968 4.1912C17.8773 3.40146 17.5549 2.64944 16.9963 2.09083C16.4377 1.53223 15.6857 1.20983 14.8959 1.19039C14.1062 1.17094 13.3392 1.45594 12.7538 1.98638L3.20395 11.6709C2.33928 12.5355 1.85352 13.7083 1.85352 14.9311C1.85352 16.1539 2.33928 17.3267 3.20395 18.1913C4.06861 19.056 5.24135 19.5418 6.46417 19.5418C7.68699 19.5418 8.85973 19.056 9.7244 18.1913L17.6201 10.3149"
            stroke="#616161"
            stroke-width="2.03897"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      messageId: "211",
      date: "22-08-2021",
      subject: "Change Title",
      message: "The title for the address verification is not correct in...",
      sender: "James Edward",
      log: "received",
      attachment: (
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3885 5.69861L5.37743 13.8444C5.11221 14.1371 4.96971 14.5206 4.97943 14.9154C4.98916 15.3103 5.15035 15.6863 5.42966 15.9656C5.70896 16.2449 6.08497 16.4061 6.47984 16.4158C6.87471 16.4256 7.2582 16.2831 7.55091 16.0178L17.1008 6.33334C17.6312 5.74793 17.9162 4.98095 17.8968 4.1912C17.8773 3.40146 17.5549 2.64944 16.9963 2.09083C16.4377 1.53223 15.6857 1.20983 14.8959 1.19039C14.1062 1.17094 13.3392 1.45594 12.7538 1.98638L3.20395 11.6709C2.33928 12.5355 1.85352 13.7083 1.85352 14.9311C1.85352 16.1539 2.33928 17.3267 3.20395 18.1913C4.06861 19.056 5.24135 19.5418 6.46417 19.5418C7.68699 19.5418 8.85973 19.056 9.7244 18.1913L17.6201 10.3149"
            stroke="#616161"
            stroke-width="2.03897"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Indexing the pathname to get the chat id
    // "s" is start and "e" is end
    let s;
    let e = pathname.length;
    for (let i = pathname.length; i >= 0; i--) {
      if (pathname[i] === "/") {
        s = i + 1;
        break;
      }
    }
    setMessages(messagesCollection[pathname.slice(s, e)]);
  }, [pathname]);

  // Setting a boundary for if messages are not set yet
  if (messages === null) {
    return <>Loading...</>;
  }

  return (
    <>
      {/* ------- The Heading region -------- */}
      <LayoutHeading heading="Message > Message History">
        <NavLink
          to="../create"
          className="btn btn-blue font-montserrat text-center"
        >
          New Message
        </NavLink>
      </LayoutHeading>

      {/* ------- The table section ------- */}
      <TableWrapper className="mt-16 w-full bg-white-50 border-[1px] rounded-md flex flex-col">
        {/* --------- The header region of the table --------- */}
        <BottomLine className="flex w-full justify-between items-center px-10 py-5">
          <h2 className="font-montserrat text-blue-100 text-lg text-center">
            All
          </h2>
          <button className="btn flex justify-between">
            <span>Filter</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0586 7.4944H15.4872C15.7348 7.4944 15.9634 7.72854 15.9634 7.9822C15.9634 8.25537 15.7538 8.47001 15.4872 8.47001H10.0586C9.84907 9.46513 8.97288 10.2066 7.94431 10.2066C6.91574 10.2066 6.03955 9.46513 5.83002 8.47001H0.534784C0.268118 8.47001 0.0585938 8.25537 0.0585938 7.9822C0.0585938 7.70903 0.268118 7.4944 0.534784 7.4944H5.83002C6.03955 6.49928 6.91574 5.75781 7.94431 5.75781C8.97288 5.75781 9.84907 6.49928 10.0586 7.4944ZM6.72526 7.9822C6.72526 8.66513 7.27764 9.23098 7.94431 9.23098C8.61097 9.23098 9.16336 8.66513 9.16336 7.9822C9.16336 7.29928 8.61097 6.73342 7.94431 6.73342C7.27764 6.73342 6.72526 7.29928 6.72526 7.9822Z"
                fill="#222222"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.36384 2.82938C4.15432 3.8245 3.27813 4.56597 2.24955 4.56597C1.04955 4.56597 0.078125 3.55133 0.078125 2.34158C0.078125 1.13182 1.04955 0.117188 2.24955 0.117188C3.27813 0.117188 4.15432 0.858651 4.36384 1.85377H15.4686C15.7353 1.85377 15.9448 2.06841 15.9448 2.34158C15.9448 2.61475 15.7353 2.82938 15.4686 2.82938H4.36384ZM3.4686 2.34158C3.4686 1.65865 2.91622 1.0928 2.24955 1.0928C1.58289 1.0928 1.03051 1.65865 1.03051 2.34158C1.03051 3.0245 1.58289 3.59036 2.24955 3.59036C2.91622 3.59036 3.4686 3.0245 3.4686 2.34158Z"
                fill="#222222"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6586 13.1507C11.8872 12.1751 12.7443 11.4336 13.7729 11.4336C14.9538 11.4336 15.9443 12.4287 15.9443 13.658C15.9443 14.8873 14.9729 15.8824 13.7729 15.8824C12.7443 15.8824 11.8681 15.1214 11.6586 14.1263H0.534784C0.268118 14.1263 0.0585938 13.9116 0.0585938 13.6385C0.0585938 13.3653 0.268118 13.1507 0.534784 13.1507H11.6586ZM12.5538 13.6385C12.5538 14.3214 13.1062 14.8873 13.7729 14.8873C14.4395 14.8873 14.9919 14.3214 14.9919 13.6385C14.9919 12.9555 14.4395 12.3897 13.7729 12.3897C13.1062 12.3897 12.5538 12.9555 12.5538 13.6385Z"
                fill="#222222"
              />
            </svg>
          </button>
        </BottomLine>

        {/* --------- The body region of the table --------- */}
        <div className="p-3 grid grid-cols-12 px-5 lg:px-10 gap-2">
          <div className="col-span-12 bg-gray-100 rounded-md p-3 text-sm">
            <h4>Message Id</h4>
          </div>

          {/* --------- The sidebar with chat previews (Not in mobile) --------- */}
          <div className="col-span-2 hidden lg:flex flex-col gap-2 rounded-md border-gray-300">
            {chatData.map((chat) => {
              return (
                <TableWrapper>
                  <NavLink
                    to={`../chat/${chat.messageId}`}
                    className="text-gray-700 p-3 flex flex-wrap items-center rounded-md gap-1 hover:bg-gray-50 justify-between"
                  >
                    <span className="font-semibold">Message Id</span>
                    <span className="text-sm">{chat.messageId}</span>
                    <span className="col-span-2 text-sm">{chat.sender}</span>
                  </NavLink>
                </TableWrapper>
              );
            })}
          </div>

          {/* --------- The chatting section --------- */}
          <div className="pt-3 lg:pl-3 col-span-12 lg:col-span-10 text-sm">
            {/* --------- The initial message --------- */}
            <div className="p-3 bg-gray-100 rounded-md">
              <p className="text-right bg-white py-1">{messages.time}</p>
              <p className="bg-white-50 p-3 rounded-md font-semibold">
                Subject: {messages.subject}
              </p>
              <p className="pt-2">{messages.init}</p>
            </div>

            {/* --------- The chat area --------- */}
            <div>
              {messages.messages.map((message: any) => {
                return (
                  <div
                    className={`w-full flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    } my-1 rounded-md`}
                  >
                    <p className="max-w-[60%] lg:max-w-[45%] p-3 bg-gray-100 rounded-md">
                      {message.message}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* --------- The message input field --------- */}
            <form className="grid grid-cols-12 w-full justify-between items-center bg-gray-100 p-3 rounded-md">
              <label
                htmlFor="attachment"
                className="col-span-1 flex justify-center"
              >
                <Attachment />
              </label>
              <input id="attachment" type="file" className="hidden" />
              <input
                type="text"
                className="bg-transparent border-0 col-span-10 outline-0"
              />
              <button className="border-none rounded-md col-span-1 flex justify-center">
                <Send />
              </button>
            </form>
          </div>
        </div>
      </TableWrapper>
    </>
  );
};

export default Chat;
