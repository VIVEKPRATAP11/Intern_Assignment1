import React, { useState } from "react";
import "./Card.css";
import { BsHeart } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";


function Card({
  image,
  popular,
  status,
  loaction,
  building_name,
  room,
  bed,
  bath,
  sft,
  rent,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="property" />
        <div className="card-image-options">
          <button className="rent-button">{status}</button>
          <button className="react-button">
            <BsHeart className="heart-icon" />
          </button>
        </div>
        <div className={popular?"popular-tag":"not-popular"}>Popular</div>
      </div>

      <div className="card-info">
        <div className="location">
          <CiLocationOn className="location-icon" />
          {loaction}
        </div>
        <div className="h-name">{building_name}</div>
        <div className="details-boxes">
          <div className="box">
            <HiOutlineBuildingOffice2 />
            {room} Room
          </div>
          <div className="box">
            <LiaBedSolid />
            {bed} Bed
          </div>
          <div className="box">
            <LiaBathSolid />
            {bath} Bath
          </div>
          <div className="box">
            <BsArrowsMove />
            {sft} sft
          </div>
        </div>
        <div className="price-details">
          <div className="price">
            <span>{rent} </span>/month
          </div>
          <button className="view-all-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
