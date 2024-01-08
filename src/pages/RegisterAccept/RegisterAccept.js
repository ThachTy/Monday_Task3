import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import "./RegisterAccept.scss";
import GroupRadioButton from "./components/GroupRadioButton/GroupRadioButton";

const list = [
  {
    value: "Work",
    label: "Work",
    sub: [
      {
        value: "Bussiness owner",
        label: "Bussiness owner",
      },
      {
        value: "Team leader",
        label: "Team leader",
      },
      {
        value: "Freelancer",
        label: "Freelancer",
      },
      {
        value: "Director",
        label: "Director",
      },
      {
        value: "C-Level",
        label: "C-Level",
      },
      {
        value: "VP",
        label: "VP",
      },
    ],
  },
  { value: "Personal", label: "Personal", sub: [] },
  {
    value: "School",
    label: "School",
    sub: [
      {
        value: "Undergraduate student",
        label: "Undergraduate student",
      },
      {
        value: "Graduate student",
        label: "Graduate student",
      },
      {
        value: "Faculty member",
        label: "Faculty member",
      },
      {
        value: "Other",
        label: "Other",
      },
    ],
  },
  {
    value: "noprofits",
    label: "Noprofits",
    sub: [
      {
        value: "Board member",
        label: "Board member",
      },
      {
        value: "Executive",
        label: "Executive",
      },
      {
        value: "Employee",
        label: "Employee",
      },
      {
        value: "Volunteer",
        label: "Volunteer",
      },
      {
        value: "IT staff",
        label: "IT staff",
      },
      {
        value: "Other",
        label: "Other",
      },
    ],
  },
];
function RegisterAccept() {
  const [tabs, setTabs] = useState([]);
  const [subs, setSubs] = useState([]);
  const [disable, setDisable] = useState(true);
  const valueCheckedRef = useRef({ tabValue: "", subValue: "" });

  useEffect(() => {
    setTabs(list);
  }, []);

  const handleChangeTabs = (valueTabChecked) => {
    let sub = "";
    let list = tabs.filter((item) => item.value === valueTabChecked);

    if (list[0].sub.length !== 0) {
      sub = valueCheckedRef.current.subValue;
      setDisable(true);
    } else {
      setDisable(false);
    }
    setSubs(list[0].sub);
    valueCheckedRef.current = {
      tabValue: valueTabChecked,
      subValue: sub,
    };
  };

  const handleChangeSub = (valueSubChecked) => {
    valueCheckedRef.current = {
      ...valueCheckedRef.current,
      subValue: valueSubChecked,
    };
    setDisable(false);
  };

  return (
    <main className="register_accept">
      <div className="invitation__container">
        <div className="invitation__left">
          <div className="invitation__content">
            <div className="content__body">
              <div className="content__top">
                <img
                  className="invitation__logo"
                  src="https://cdn.monday.com/images/logos/logo-full-big.png"
                  alt="logo-monday.com"
                />
              </div>
              {/* Title Radio Button */}
              <div className="body__top mb-[4rem]">
                <GroupRadioButton
                  heading={"  Hey there, what brings you here today?"}
                  list={tabs}
                  group="work"
                  handleChange={handleChangeTabs}
                />
              </div>
              {/* Sub Radio Button */}
              <div className="body__bottom">
                {subs.length !== 0 && (
                  <GroupRadioButton
                    heading={"What best describes your current role?"}
                    list={subs}
                    group="role"
                    handleChange={handleChangeSub}
                  />
                )}
              </div>
            </div>
            <div className="content__footer flex justify-end items-end">
              <Button disable={disable} type="button">
                <span className="mr-2">Continue</span>
                <i className="fa-solid fa-angle-right"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="invitation__right">
          <img
            className="invitation-image w-full h-full"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
            alt="register_invitation"
          />
        </div>
      </div>
    </main>
  );
}

export default RegisterAccept;
