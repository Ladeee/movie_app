// ----------- import external dependencies ------------
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// ------------ import internal dependencies ------------
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { sizes } from "../../utils/screenSizes";

function SearchInput() {
  // ------ component state managers -------
  const [mobile, setMobile] = useState(false);
  const [screenSize, setScreenSize] = useState<number | null>(null);

  const handleClickForMobile = () => {
    if (screenSize && window.innerWidth <= screenSize) {
      console.log("function called");
      setMobile(!mobile);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize && window.innerWidth <= 650) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenSize]);

  return (
    <>
      <SearchWrapper>
        <span id="search" className="hidden">
          Search
        </span>
        {mobile ? null : (
          <SearchBox
            placeholder="Search..."
            type="search"
            aria-labelledby="search"
          />
        )}
        <Search onClick={handleClickForMobile} />
      </SearchWrapper>
    </>
  );
}

export default SearchInput;

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid var(--ash50);
  border-radius: 10px;
  display: flex;
  background: var(--white);
  align-items: center;
  padding-right: 1rem;

  @media screen and (max-width: ${sizes.mobileL}) {
    border: none;
    background: transparent;
    flex-direction: column-reverse;
  align-items: start;

`;

const SearchBox = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem;
  height: 30px;
  font-size: 0.875rem;
  font-family: "Lato";

  @media screen and (max-width: ${sizes.mobileL}) {
    position: absolute;
    top: 60px;
    max-width: 300px;
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: var(--white);
  }
`;
