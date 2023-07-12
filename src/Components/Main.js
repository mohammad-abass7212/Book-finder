import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBook = () => {
    setLoading(true);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
          "&maxResults=40"
      )
      .then((res) => {
        setLoading(false);
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      searchBook();
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => handleKeypress(e)}
            />
            <button onClick={searchBook} className="search_bar" type="sumbit">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="container ">{<Card book={bookData} />}</div>
      )}
    </>
  );
};
export default Main;
