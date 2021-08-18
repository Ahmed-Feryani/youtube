import React from "react";
import "./style.scss";

const VidCard = (props) => {
  return (
    <div className="VidCard">
      <div className="VidCard__img-box">
        <img src="" alt="" />
      </div>
      <div className="VidCard__info">
        <h4 className="VidCard__title"> {props.title} </h4>

        <div className="VidCard__info-sup">
          <p className="VidCard__owner"> {props.owner} </p>
          <p className="VidCard__info-sup__views">
            <span>{props.views}</span> . <span>{props.date}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VidCard;
