import React, { useContext } from "react";
import "./TabSection.css";
import Button from "../Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { houseContext } from "../../context";
import { data } from "../../data";

function TabSection() {
  const { setCity, setShowMore } = useContext(houseContext);
  return (
    <div className="tab-section-wraaper">
      <div className="tab-section-container">
        <div className="tabsection-left">
          {Object.keys(data).map((city, key) => {
            return (
              <button
                className="tab-button"
                key={key}
                onClick={() => {
                  setCity(city);
                  setShowMore(6);
                }}
              >
                {city}
              </button>
            );
          })}
        </div>
        <div className="tabsection-right">
          <button className="view-all-button">
            View All
            <BsArrowRight className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabSection;
