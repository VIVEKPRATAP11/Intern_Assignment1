import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/PropertyDetails.css";
import { data } from "../data";
import Card from "../components/Card/Card";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function Propertydetails() {
  const { city, id } = useParams();
  const cityList = data[city];
  const cardData = cityList.find((city) => city.id === id);
  if (!cardData) return null;
  return (
    <>
      <div className="wrapper">
        {/* <Card
          key={cardData.id}
          image={cardData.image}
          status={cardData.status}
          popular={cardData.popular}
          loaction={cardData.loaction}
          building_name={cardData.building_name}
          room={cardData.room}
          bed={cardData.bed}
          bath={cardData.bath}
          sft={cardData.sft}
          rent={cardData.rent}
        /> */}
        <div className="wrapper-left-image">
          <img src={cardData.image} alt="" />
        </div>
        <div className="wrapper-right-info">
      
          <div className="detailed-property-name">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            odio nemo, sit in nesciunt, sint molestias reiciendis quod
            consectetur minus laudantium.
          </div>
          <div className="box-wrapper">
            <div className="detailed-box">
              <HiOutlineBuildingOffice2 className="box-icons" />
              {cardData.room} Room
            </div>
            <div className="detailed-box">
              <LiaBedSolid className="box-icons" />
              {cardData.bed} Bed
            </div>
            <div className="detailed-box">
              <LiaBathSolid className="box-icons" />
              {cardData.bath} Bath
            </div>
            <div className="detailed-box">
              <BsArrowsMove className="box-icons" />
              {cardData.sft} sft
            </div>
          </div>
          <div className="detailed-rent">
            <span>{cardData.rent}</span>/month
          </div>
          <Link to="/">
            <button className="tab-button go-back-button">Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Propertydetails;
