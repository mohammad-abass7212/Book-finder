import React from "react";
import DataTable from "react-data-table-component";

const Favourit = () => {
  const data = JSON.parse(localStorage.getItem("favourits"));

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
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Favourit;
