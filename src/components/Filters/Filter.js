import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          updateStatus={updateStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;
