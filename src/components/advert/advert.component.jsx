import React from "react";
import Proptypes from "prop-types";

import "./advert.styles.css";

const Advert = ({ data, onDelete }) => {
  const handleDelete = () => onDelete(data.id);

  return (
    <div style={{ padding: 12, border: "1px solid #000", marginBottom: 12 }}>
      <div>{data.name}</div>

      <div style={{ marginTop: 12 }}>
        <button value='Remove' type='button' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Advert.propTypes = {
  data: Proptypes.shape({
    name: Proptypes.string,
    id: Proptypes.string,
    photo: Proptypes.string,
    createdAt: Proptypes.string,
    price: Proptypes.number,
    sale: Proptypes.bool,
    tags: Proptypes.arrayOf(Proptypes.string),
  }),
  onDelete: Proptypes.func,
};

export default Advert;
