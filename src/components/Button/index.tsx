import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Button = (props: Props) => {
  const { children, className } = props;

  return (
    <ButtonWrapper className={`${className} text-[white] rounded-md`}>
      {" "}
      {children}{" "}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: #0d2aab;
  border: none;
  width: 100%;
  padding: 10px 0px;
`;
