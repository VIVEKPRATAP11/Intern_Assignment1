import React, { useContext, useState } from "react";
import "../styles/LandingPage.css";
import Card from "../components/Card/Card";
import ShowMoreButton from "../components/All Buttons/ShowMoreButton";
import { data } from "../data";
import { houseContext } from "../context";
import { Link } from "react-router-dom";
import TabSection from "../components/TabSection/TabSection";

function LandingPage() {
  let showMoreCards = 3;
  const { city, showMore, setShowMore } = useContext(houseContext);
  const showMoreproperty = () => {
    if (showMore === 6) {
      setShowMore(showMore + showMoreCards);
    } else {
      setShowMore(showMore - 3);
    }
  };
  return (
    <>
      <TabSection />
      <div className="card-wrapper">
        {data[city].slice(0, showMore).map((item, index) => {
          return (
            <Link className="dynamic-route" to={`/card/${city}/${item.id}`}>
              <Card
                key={item.id}
                image={item.image}
                status={item.status}
                popular={item.popular}
                loaction={item.loaction}
                building_name={item.building_name}
                room={item.room}
                bed={item.bed}
                bath={item.bath}
                sft={item.sft}
                rent={item.rent}
              />
            </Link>
          );
        })}
      </div>
      <div onClick={showMoreproperty}>
        <ShowMoreButton />
      </div>
    </>
  );
}

export default LandingPage;
