import react, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate();
  const [favourits, setFavourits] = useState([]);

  const addToFavourits = (item) => {
    // setFavourits((oldArray) => [...oldArray, item]);
    // const updated = "";
    const exist = favourits.some((val) => val.id === item.id);
    if (exist) {
      alert("already esists");
    } else {
      setFavourits((oldArray) => {
        const updated = [...oldArray, item];
        localStorage.setItem("favourits", JSON.stringify(updated));
        return updated;
      });
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourits"));
    if (data !== null) {
      setFavourits(data);
    }
  }, []);
  const handleDetailPage = (item) => {
    navigate("/detail", { state: item });
  };
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div key={item.id} className="card">
                <div className="favourit_detail">
                  <i
                    className="fa fa-heart favourit"
                    aria-hidden="true"
                    onClick={() => addToFavourits(item)}
                  ></i>

                  <i
                    className="fa fa-arrow-right goto_DetailPage"
                    aria-hidden="true"
                    onClick={() => handleDetailPage(item)}
                  ></i>
                </div>
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};
export default Card;
