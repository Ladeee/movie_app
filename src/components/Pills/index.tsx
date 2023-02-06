// ----------- import internal dependencies ------------
import React from "react";
import styled from "styled-components";

interface Props {
  content: string;
  type?: "pending" | "success" | "failed" | "default";
}

function Pill({ content, type = "default" }: Props) {
  const classType =
    type === "success"
      ? "bg-green-100 text-green-900"
      : type === "pending"
      ? "bg-yellow-100 text-yellow-900"
      : type === "failed"
      ? ""
      : " bg-blue-pillBg text-blue-pillColor";

  const indicatorType =
    type === "success"
      ? "bg-green-500"
      : type === "pending"
      ? "bg-yellow-400"
      : type === "failed"
      ? ""
      : " bg-blue-pillColor";

  return (
    <>
      <PillsWrapper className={`${classType}`} tabIndex={0}>
        <span className={`indicator ${indicatorType}`}></span>
        <span className="block">{content}</span>
      </PillsWrapper>
    </>
  );
}

export default Pill;

const PillsWrapper = styled.div`
  height: 25px;
  min-width: 100px;
  display: flex;
  padding: 0.5rem;
  border-radius: 35px;
  align-items: center;
  font-family: "Inter";
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;

  > .indicator {
    height: 10px;
    width: 10px;
    display: block;
    border-radius: 50px;
  }
`;
