// ------------ import external dependencies ------------
import styled from "styled-components";

// ------------- import internal dependencies -------------
import { sizes } from "../../utils/screenSizes";

function CirclePlaceholder({ ...rest }) {
  return <Placeholder {...rest}></Placeholder>;
}

export default CirclePlaceholder;

const Placeholder = styled.div`
  background: var(--white300);
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 1px solid var(--grey300);

  @media screen and (max-width: ${sizes.mobileL}) {
    height: 80px;
    width: 90px;
  }
`;
