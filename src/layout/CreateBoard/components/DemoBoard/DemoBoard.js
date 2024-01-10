import React from "react";
import "./DemoBoard.scss";
function DemoBoard() {
  return (
    <section className="demoboard">
      <h3 className="title">
        {false ? "Name" : <span className="line"></span>}
      </h3>
      <div className="board">
        <div className="board-row">
          <span className="line-title"></span>
        </div>
        {/*  */}
        <div className="board-content">
          {/* header */}
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <i className="fa-solid fa-plus mx-auto"></i>
          </div>
          {/* body */}
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            {/* <span className="line-cell"></span> */}
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            {/* <span className="line-cell"></span> */}
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            <span className="line-cell"></span>
          </div>
          <div className="board-cell">
            {/* <span className="line-cell"></span> */}
          </div>
          {/*  */}
          <div className="board-cell last-cell">
            <span className="line-cell"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoBoard;
