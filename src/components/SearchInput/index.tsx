// ----------- import external dependencies ------------
import React from "react";
import styled from "styled-components";

// ------------ import internal dependencies ------------
import { ReactComponent as Search } from "../../assets/svg/search.svg";

function SearchInput() {
  return (
    <>
      <SearchWrapper>
        <span id="search" className="hidden">
          Search
        </span>
        <SearchBox
          placeholder="Search..."
          type="search"
          aria-labelledby="search"
        />
        <Search />
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
`;
