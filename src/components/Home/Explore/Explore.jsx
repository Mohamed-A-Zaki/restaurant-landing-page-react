import React from "react";
import "./Explore.css";
import data from "../../../json/Api.json";

const Explore = () => {
  return (
    <div className="explore_food" id="explore">
      <div className="container">
        <div className="heading">
          <h2>Explore Our Foods</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="items wow animate__slideInUp" data-wow-duration="1s">
          {data.foods.map(
            ({ id, name, img, old_price, new_price, overview }) => {
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={img} className="img-responsive" alt="" />
                  </div>
                  <div className="description">
                    <h3>{name}</h3>
                    <div className="overview">{overview}</div>
                    <div className="price">
                      <div className="new">{new_price}</div>
                      <del className="old">{old_price}</del>
                    </div>
                  </div>
                  <button className="btn">Order Now</button>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
