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
      className={`${className} flex flex-col gap-y-[1px] bg-[#E4E4E7] overflow-hidden`}
    >
      <h2 className="w-full bg-[white] p-8 text-sm text-gray-700 font-montserrat font-semibold">
        {heading}
      </h2>
      {children}
    </TableWrapper>
  );
};

export const TableWrapper = styled.div`
  border: 1px solid var(--grey200);
`;
export const BottomLine = styled.div`
  borderbottom: 1px solid var(--grey200);
`;
export const BottomLineText = styled.h2`
  borderbottom: 1px solid var(--grey200);
`;

export default Tabulate;
