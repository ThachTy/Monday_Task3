import React from "react";
import "./DemoBoard.scss";
import { useSelector } from "react-redux";
function DemoBoard({}) {
  const { nameProject } = useSelector((state) => state.demoBoardReducer);

  return (
    <section className="board">
      <div className="board-row">
        <span className="line-title"></span>
      </div>
      {/* header */}
      <div className="board-content">
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
          <span className="line-cell"></span>
        </div>
        <div className="board-cell">
          <span className="line-cell"></span>
        </div>
        <div className="board-cell">
          <span className="line-cell"></span>
        </div>

        {/*  */}
        <div className="board-cell last-cell">
          <span className="line-cell"></span>
        </div>
      </div>
    </section>
  );
}

export default DemoBoard;
