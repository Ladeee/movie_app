import { useState } from "react";
import {
  AuthNavbarContainer,
  Company,
  Individual,
  Agent,
} from "../authLayout.styled";

export default function AuthNavbar() {
  const [colorChange, setColorChange] = useState("white");

  const click = () => {
    setColorChange("black");
  };
  return (
    <AuthNavbarContainer>
      <Company onClick={click} style={{ color: colorChange }}>
        Company
      </Company>
      <Individual>Individual</Individual>
      <Agent>Agent</Agent>
    </AuthNavbarContainer>
  );
}
