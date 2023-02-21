// ------------- import external dependencies -------------
import styled from "styled-components";

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <TableWrap>{children}</TableWrap>
      </div>
    </>
  );
}

export default TableWrapper;

const TableWrap = styled.table`
  font-family: "Inter";
  thead {
    width: 100%;
    background: var(--ash100);
  }
`;
