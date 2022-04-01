// Styled Components
import { Container, SearchField, SearchButton } from "./StyledComponents";

// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Action Creators
import { hideNotification, showNotification } from "../../Redux/Site/ActionCreator";
import { fetchWeather } from "../../Redux/Weather/ActionCreator";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const changeSearchInput = (e) => setSearch(e.target.value);
  const initiateSearch = (e) => {
    if (search.trim() === "") {
      dispatch(showNotification(`Please Enter City Name/Pin Code before Searching.`));

      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return;
    }

    // Send Search Request to Server
    dispatch(fetchWeather(search));
  };

  return (
    <Container>
      <SearchField type="search" placeholder="Something" value={search} onChange={changeSearchInput}></SearchField>

      <SearchButton onClick={initiateSearch}>&#128269;</SearchButton>
    </Container>
  );
};

export default SearchBar;
