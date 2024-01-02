import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import "../RegisterAccept/RegisterAccept.scss";
import GroupCheckBox from "../RegisterAccept2/components/GroupCheckBox/GroupCheckBox";

const list = [
  {
    value: "Social media",
    label: "Social media (Facebook, Instagram, Redditm etc.)",
    sub: [],
  },
  { value: "Audio ad", label: "Audio ad ( Podcast, Spocify)", sub: [] },
  {
    value: "Billboard",
    label: "Billboard / Public transit ad",
    sub: [],
  },
  {
    value: "Search engine",
    label: "Search engine (Google, Bing, etc.)",
    sub: [],
  },
  {
    value: "Friend/Colleague",
    label: "Friend / Colleague",
    sub: [],
  },
  {
    value: "Software development",
    label: "Software development",
    sub: [],
  },
  {
    value: "YouTube ad",
    label: "YouTube",
    sub: [],
  },
  {
    value: "Software review sites",
    label: "Software review sites",
    sub: [],
  },
  {
    value: "Linkedln",
    label: "Linkedln",
    sub: [],
  },
  {
    value: "TV / Streaming service",
    label: "TV / Streaming service",
    sub: [],
  },
  {
    value: "Consultant",
    label: "Consultant",
    sub: [],
  },
  {
    value: "Other",
    label: "Other",
    sub: [],
  },
];
function RegisterAccept2() {
  const [tabs, setTabs] = useState([]);
  const [subs, setSubs] = useState([]);
  const valueCheckedRef = useRef({ tabValue: [], subValue: "" });

  useEffect(() => {
    setTabs(list);
  }, []);

  const handleChangeTabs = (valueTabChecked) => {
    console.log(valueTabChecked);
    // let sub = "";
    // let list = tabs.filter((item) => item.value === valueTabChecked);
    // if (list[0].sub.length !== 0) {
    //   sub = valueCheckedRef.current.subValue;
    // }
    // setSubs(list[0].sub);
    // valueCheckedRef.current = {
    //   tabValue: [...valueCheckedRef.current, ...valueTabChecked],
    //   subValue: sub,
    // };
  };

  // const handleChangeSub = (valueSubChecked) => {
  //   valueCheckedRef.current = {
  //     ...valueCheckedRef.current,
  //     subValue: valueSubChecked,
  //   };
  // };

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
                <GroupCheckBox
                  heading={"One last question, how did you hear about us?"}
                  message={""}
                  list={tabs}
                  group="work"
                  handleChange={handleChangeTabs}
                />
              </div>
              {/* Sub Radio Button */}
              {/* <div className="body__bottom">
                {subs.length !== 0 && (
                  <GroupRadioButton
                    heading={"What best describes your current role?"}
                    list={subs}
                    group="role"
                    handleChange={handleChangeSub}
                  />
                )}
              </div> */}
            </div>
            <div className="content__footer flex justify-between items-center">
              <Button className="btn-back" type="button">
                <i className="fa-solid fa-angle-left"></i>
                <span className="ml-2">Back</span>
              </Button>
              <Button
                handleClick={() => console.log("Continue")}
                className="btn-continue"
                type="button"
              >
                <span className="mr-2">Continue</span>
                <i className="fa-solid fa-angle-right"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="invitation__right">
          <img
            className="invitation-image w-full h-full"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
            alt="register_invitation"
          />
        </div>
      </div>
    </main>
  );
}

export default RegisterAccept2;
