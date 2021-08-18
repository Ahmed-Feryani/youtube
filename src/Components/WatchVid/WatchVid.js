import React from "react";
import "./style.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
const WatchVid = () => {
  return (
    <div className="WatchVid">
      <div className="WatchVid__vid">
        <iframe
          src="https://www.youtube.com/embed/hF0MPta86uU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="WatchVid__info">
        <h2 className="WatchVid__info__title">the video title</h2>
        <div className="WatchVid__info-sub">
          <h4 className="WatchVid__info-sub__views">
            <span>109 072 vues</span> . <span>14 févr. 2019</span>
          </h4>
          <div className="WatchVid__info-sub__action">
            <div className="WatchVid__info-sub__like-box">
              <div className="WatchVid__info-sub__like">
                <ThumbUpIcon></ThumbUpIcon>
                <span>1</span>
              </div>
              <div className="WatchVid__info-sub__dislike">
                <ThumbDownIcon></ThumbDownIcon>
                <span>1</span>
              </div>
            </div>
            <div className="WatchVid__info-sub__share cv">
              <ReplyIcon></ReplyIcon>
              <span>PARTAGER</span>
            </div>
            <div className="WatchVid__info-sub__register cv">
              <PlaylistAddIcon></PlaylistAddIcon>
              <span>ENREGISTRER</span>
            </div>
            <div className="WatchVid__info-sub__menu"></div>
          </div>
        </div>
      </div>
      <div className="WatchVid__details">
        <div className="WatchVid__details__top">
          <div className="WatchVid__details__profile"></div>
          <button></button>
        </div>
        <div className="WatchVid__details__main"></div>
      </div>
      <div className="WatchVid__comments"></div>
    </div>
  );
};

export default WatchVid;
