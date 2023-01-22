import {
  SignupNavContainer,
  Company,
  Individual,
  Agent,
} from "./signup.styled";

export default function SignupNav() {
  return (
    <SignupNavContainer>
      <Company>Company</Company>
      <Individual>Individual</Individual>
      <Agent>Agent</Agent>
    </SignupNavContainer>
  );
}
