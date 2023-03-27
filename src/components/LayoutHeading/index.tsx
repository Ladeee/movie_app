// --------------- import external dependencies ------------
import React from "react";

interface Props {
  heading: string;
  children?: React.ReactNode;
  content?: string;
}

function LayoutHeading({ heading, children, content }: Props) {
  return (
    <div className="flex justify-between mt-12 items-center flex-wrap print:hidden">
      <h1 className="font-montserrat">{heading}</h1>
      {children ? children : <span>{content}</span>}
    </div>
  );
}

export default LayoutHeading;
