import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Favourit = () => {
  const data = JSON.parse(localStorage.getItem("favourits"));
  const [favourits, setFavourits] = useState(data);
  const handleDelete = (id) => {
    const result = data.filter((val) => val.id != id);
    setFavourits(result);
    localStorage.setItem("favourits", JSON.stringify(result));
  };
  const columns = [
    {
      name: "S.No",
      selector: (row, i) => i + 1,
    },
    {
      name: "Title",
      selector: (row) => row.volumeInfo.title,
    },
    {
      name: "Authors",
      selector: (row) => row.volumeInfo.authors,
    },
    {
      name: "Book",
      selector: (row) => (
        <img
          className="favourit_img"
          src={row.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
      ),
      center: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <i
          class="fa fa-trash trasn_icon"
          aria-hidden="true"
          onClick={() => handleDelete(row.id)}
        ></i>
      ),
      center: true,
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={favourits} />
    </div>
  );
};

export default Favourit;
