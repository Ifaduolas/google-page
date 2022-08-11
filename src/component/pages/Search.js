import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import "./Search.css";
import { Button } from "@mui/material";

function Search({ hideButtons = false }) {

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input placeholder="Search Google or type a URL" />
        <MicIcon sx={{ color: '#4caf50'}} />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit"  variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="search-buttonsHidden"
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search-buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;