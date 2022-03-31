import { Container, SearchSelect, SearchField, SearchButton } from "./StyledComponents";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { hideNotification, showNotification } from "../../Redux/Site/ActionCreator";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("city");

  const changeSearchInput = (e) => setSearch(e.target.value);
  const changeSearchType = (e) => setSearchType(e.target.value);
  const initiateSearch = (e) => {
    if (search.trim() === "") {
      dispatch(showNotification(`Please Enter ${searchType === "city" ? "City Name" : "Pin/Zip Code"} before Searching.`));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return;
    }

    // Send Search Request to Server
  };

  return (
    <Container>
      <SearchSelect onChange={changeSearchType} value={searchType}>
        <option value="city">City Name</option>
        <option value="pin">Pin Code</option>
      </SearchSelect>

      <SearchField type="search" placeholder="Something" value={search} onChange={changeSearchInput}></SearchField>

      <SearchButton onClick={initiateSearch}>&#128269;</SearchButton>
    </Container>
  );
};

export default SearchBar;
