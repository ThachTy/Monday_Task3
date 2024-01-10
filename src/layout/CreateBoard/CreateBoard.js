import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./CreateBoard.scss";
import DemoBoard from "./components/DemoBoard/DemoBoard";
import Button from "../../components/Button/Button";
function CreateBoard() {
  const [disable, setDisable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <main id="createboard" className={!isModalOpen ? "hidden" : ""}>
      <div className="modal">
        <button onClick={handleCancel} className="btn-close" type="button">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal__body">
          <div className="modal__left">
            <div className="left__content">
              <header className="left__top">
                <img
                  className="w-full h-full object-fill"
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt="logo-monday.com"
                />
              </header>
              {/* Render Conponents */}
              <section className="left__middle">
                <Outlet />
              </section>
              {/*  */}
              <footer className="left__footer">
                {/* Remind */}
                <a onClick={handleCancel} role="button">
                  <span>Back</span>
                </a>
                {/* Continue */}
                <Button className={""} disable={disable} type="button">
                  <span className="mr-2">Next</span>
                  <i className="fa-solid fa-angle-right"></i>
                </Button>
              </footer>
            </div>
          </div>
          <div className="modal__right">
            {/* Demo Table */}
            <DemoBoard></DemoBoard>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateBoard;
