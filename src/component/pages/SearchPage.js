import React from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function SearchPage() {

    return (
      <div className="search-page">
        <div className="searchPage-header">
          <Link to="/">
            <img
              className="searchPage-logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
  
          <div className="searchPage-headerBody">
            <Search hideButtons />
  
            <div className="searchPage-options">
              <div className="searchPage-optionsLeft">
                <div className="searchPage-option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage-option">
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPage-option">
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className="searchPage-option">
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage-option">
                  <RoomIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPage-option">
                  <MoreVertIcon />
                  <Link to="/more">More</Link>
                </div>
              </div>
  
              <div className="searchPage-optionsRight">
                <div className="searchPage-option">
                  <Link to="/settings"> Settings</Link>
                </div>
                <div className="searchPage-option">
                  <Link to="/tools"> Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        
          <div className="searchPage-results">
            <p className="searchPage-resultCount">
              About 
            </p>

              <div className="searchPage-result">
                <a href="/">
                  
                      <img
                        className="searchPage_resultImage"
                        src=""
                        alt=""
                      />
                   
                   <ArrowDownwardIcon />
                </a>
                <a className="searchPage-resultTitle" href="/">
                  <h2>k</h2>
                </a>
                <p className="searchPage-resultSnippet"></p>
              </div>
          </div>
      
      </div>
    );
  }
  
  export default SearchPage;