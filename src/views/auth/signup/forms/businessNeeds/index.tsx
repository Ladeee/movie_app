import {
  SignupContainer,
  Heading,
  Addresses,
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
      <Heading>Select Your Business Needs</Heading>
      <Addresses>
        With Nester Verify, you are able to verify addresses <br />
        easily, from anywhere in the world
      </Addresses>
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
