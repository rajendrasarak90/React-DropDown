import React from "react";

const Home = (props) => {
  return (
    <div className={props.isShow ? "home" : "marginBottom home"}>
      <h1>Should you use a Dropdown?</h1>
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
  );
};

export default Home;
