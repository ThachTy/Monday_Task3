import React, { useState } from "react";
import { Select } from "antd";
import "./InvitePage.scss";
import "../RegisterAccept/RegisterAccept.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function InvitePage() {
  const [emails, setEmails] = useState([
    { email: "", role: "", remove: false },
    { email: "", role: "", remove: false },
  ]);
  const [disable, setDisable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handelAddEmail = () => {
    setEmails([...emails, { email: "", role: "", remove: false }]);
  };

  const handelRemove = (index) => {
    if (emails.length <= 0) return;
    let newEmails = [...emails];
    newEmails.splice(index, 1, { email: "", role: "", remove: true });

    setEmails([...newEmails]);
  };

  return (
    <main id="invitepage" className={!isModalOpen && "hidden"}>
      <div className="modal">
        <button onClick={handleCancel} className="btn-close" type="button">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-body ">
          <div className="body-left register_accept">
            <div className="content__body invitation__content">
              <div className="content__top ">
                <img
                  className="invitation__logo"
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt="logo-monday.com"
                />
              </div>
              <h3 className="heading">Who else is on your team?</h3>
              {/* */}
              <div className="body__top mb-[4rem] flex-grow">
                <p className="mb-3 text-gray-400 text-sm">
                  Invite with link (anyone with a @ email)
                </p>
                <div className="list-email mb-3">
                  {/* Render list email in here */}
                  {emails.length >= 0 &&
                    emails.map((item, index) => {
                      if (!item.remove)
                        return (
                          <div className="type-email mb-2">
                            <Input
                              className="input-email"
                              placeholder={"Add email here"}
                            ></Input>
                            <Select
                              className="select"
                              options={[
                                { value: "Admin", label: "Admin" },
                                { value: "Member", label: "Member" },
                              ]}
                              defaultValue={"Admin"}
                            ></Select>
                            <button
                              onClick={() => handelRemove(index)}
                              className="btn-remove mx-2"
                              type="button"
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        );
                    })}
                </div>
                <button className="btn" type="button" onClick={handelAddEmail}>
                  <i className="fa-solid fa-plus mr-2"></i> Add Another
                </button>
              </div>
              <div className="content__footer flex justify-between items-center">
                {/* Remind */}
                <a onClick={handleCancel} className="btn-remind" role="button">
                  <span>Remind me later</span>
                </a>
                {/* Continue */}
                <Button className={""} disable={disable} type="button">
                  <span className="mr-2">Invite your Team</span>
                  <i className="fa-solid fa-angle-right"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="body-right">
            <img
              className=" w-full h-full object-cover"
              src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default InvitePage;
