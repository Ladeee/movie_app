import {
  SignupContainer,
  Heading,
  FormTwoContainer,
  BoxWrapper,
  Button,
  Btn,
  Box,
} from "../../pages.styled";

export default function BusinessNeeds({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  return (
    <SignupContainer>
      <Heading className="sm:text-center md:text-left">
        Select Your Business Needs
      </Heading>
      <FormTwoContainer>
        <BoxWrapper>
          <Box>Address Verification</Box>
          <input type="checkbox" />
        </BoxWrapper>

        <BoxWrapper>
          <Box>Identity Verification</Box>
          <input type="checkbox" />
        </BoxWrapper>

        <BoxWrapper>
          <Box>Business Verification</Box>
          <input type="checkbox" />
        </BoxWrapper>

        <BoxWrapper>
          <Box>Account Opening</Box>
          <input type="checkbox" />
        </BoxWrapper>

        <BoxWrapper>
          <Box>Insurance</Box>
          <input type="checkbox" />
        </BoxWrapper>
      </FormTwoContainer>

      <Btn>
        <Button onClick={goToNextPage}>Continue</Button>
      </Btn>
    </SignupContainer>
  );
}
