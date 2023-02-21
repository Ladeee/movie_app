// ------------- import external dependencies -------------
import styled from "styled-components";

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <TableWrap>{children}</TableWrap>
      </div>
    </>
  );
}

export default TableWrapper;

const TableWrap = styled.table`
  font-family: "Inter";
  border-collapse: collapse;
  width: 100%;
  // table-layout: fixed;

  thead {
    background: var(--ash100);
    border-radius: 4px;
    th {
      padding: 0.875rem;
      font-size: 0.875rem;
      text-align: left;
      word-wrap: break-word;
      // max-width: 300px;
    }
  }

  tbody {
    td {
      padding: 0.875rem;
      font-size: 0.875rem;
      text-align: left;
      word-wrap: break-word;
      // max-width: 300px;
    }
  }
`;
