import AuthLayout from "../../../../../components/authLayout";
import {
  SignupContainer,
  Heading,
  Addresses,
  FormTwoContainer,
  InputWrapper,
  Button,
  Box,
} from "../pages.styled";

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
        <InputWrapper>
          <Box>Address Verification</Box>
          <input type="checkbox" />
        </InputWrapper>

        <InputWrapper>
          <Box>Identity Verification</Box>
          <input type="checkbox" />
        </InputWrapper>

        <InputWrapper>
          <Box>Business Verification</Box>
          <input type="checkbox" />
        </InputWrapper>

        <InputWrapper>
          <Box>Account Opening</Box>
          <input type="checkbox" />
        </InputWrapper>

        <InputWrapper>
          <Box>Insurance</Box>
          <input type="checkbox" />
        </InputWrapper>
      </FormTwoContainer>

      <Button onClick={goToNextPage}>Continue</Button>
    </SignupContainer>
  );
}
