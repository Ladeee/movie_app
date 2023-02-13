import styled from "styled-components";

type Props = {
  heading: string;
  children: React.ReactNode;
  className?: string;
};

const Tabulate = (props: Props) => {
  const { heading, children, className } = props;

  return (
    <TableWrapper
      className={`${className} flex flex-col gap-y-[1px] bg-[#E4E4E7]`}
    >
      <h2 className="w-full bg-[white] p-8 text-sm text-gray-700 font-montserrat font-semibold">
        {" "}
        {heading}{" "}
      </h2>
      {children}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  border: 1px solid #e4e4e7;
`;

export default Tabulate;
