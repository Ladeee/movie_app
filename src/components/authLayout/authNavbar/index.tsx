import {
  AuthNavbarContainer,
  Company,
  Individual,
  Agent,
} from "../authLayout.styled";

export default function AuthNavbar() {
  return (
    <AuthNavbarContainer>
      <Company>Company</Company>
      <Individual>Individual</Individual>
      <Agent>Agent</Agent>
    </AuthNavbarContainer>
  );
}
