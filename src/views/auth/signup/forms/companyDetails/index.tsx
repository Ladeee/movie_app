import {
  SignupContainer,
  Industry,
  IndustryIcon,
  Heading,
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
      <Heading className="sm:text-center md:text-left">
        Input Your Company Details
      </Heading>
      <FormContainer>
        <InputWrapper>
          <label htmlFor="company_name">Company Name</label>
          <input
            type="text"
            required
            id="company_name"
            data-testid="company_name"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="reg_number">CAC Registration Number</label>
          <input
            type="number"
            required
            id="reg_number"
            data-testid="reg_number"
          />
        </InputWrapper>
        <label htmlFor="industry">Industry</label>
        <Industry>
          <input type="text" required id="industry" data-testid="industry" />
          <IndustryIcon>
            <img src={Indust} alt="" />
          </IndustryIcon>
        </Industry>
        <InputWrapper>
          <label htmlFor="company_address">Company Address</label>
          <input
            type="text"
            required
            id="company_address"
            data-testid="company_address"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="role">Role</label>
          <input type="text" required id="role" data-testid="role" />
        </InputWrapper>
      </FormContainer>
      <Btn>
        <Button type="submit" onClick={goToNextPage}>
          Create Account
        </Button>
      </Btn>
    </SignupContainer>
  );
}
