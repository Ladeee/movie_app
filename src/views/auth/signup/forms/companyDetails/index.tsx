import {
  SignupContainer,
  Industry,
  IndustryIcon,
  Heading,
  Addresses,
  FormContainer,
  InputWrapper,
  Btn,
  Button,
} from "../../pages.styled";
import Indust from "../../../../../assets/images/authentification/industry.png";

export default function CompanyDetails({
  goToNextPage,
}: {
  goToNextPage: () => void;
}) {
  return (
    <SignupContainer>
      <Heading>Input Your Company Details</Heading>
      <Addresses>
        With Nester Verify, you are able to verify addresses <br />
        easily, from anywhere in the world
      </Addresses>

      <FormContainer>
        <InputWrapper>
          <label>Company Name</label>
          <input type="text" required />
        </InputWrapper>
        <InputWrapper>
          <label>CAC Registration Number</label>
          <input type="text" required />
        </InputWrapper>
        <label>Industry</label>
        <Industry>
          <input type="text" required />
          <IndustryIcon>
            <img src={Indust} alt="" />
          </IndustryIcon>
        </Industry>
        <InputWrapper>
          <label id="create">Company Address</label>
          <input type="text" required />
        </InputWrapper>
        <InputWrapper>
          <label>Role</label>
          <input type="text" required />
        </InputWrapper>
      </FormContainer>

      <Btn>
        <Button onClick={goToNextPage}>Create Account</Button>
      </Btn>
    </SignupContainer>
  );
}
