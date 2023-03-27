// ------------ import external dependencies -----------
import styled from "styled-components";

// --------- import internal dependencies -----------
import { ReactComponent as Attach } from "../../assets/svg/attachment.svg";

function Attachment({ name }: { name?: string }) {
  return (
    <AttachmentWrapper>
      <div className="attachment-indicator">
        <Attach />
      </div>
      <span className="block text-center font-inter text-sm font-bold py-4">
        {name}
      </span>
    </AttachmentWrapper>
  );
}

export default Attachment;

// ------- component styles ------
const AttachmentWrapper = styled.div`
  border: 1px solid var(--ash200);
  border-radius: 5px;
  width: 250px;

  & > .attachment-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--ash300);
    height: 230px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid var(--ash200);
  }
`;
