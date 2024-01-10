import React, { useRef } from "react";
import Input from "../../components/Input/Input";
import "./CreateBoardName.scss";
function CreateBoardName() {
  const inputRef = useRef(null);

  const handelChangeName = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className="content w-full h-full">
      <h3 className="title">Let's start working together</h3>
      {/* */}
      <p className="text">
        Give your board a name, e.g. marketing plan, sales pipeline, quarterly
        roadmap...
      </p>
      <Input
        ref={inputRef}
        handelChange={handelChangeName}
        className={"mb-2"}
        placeholder={"My first board"}
        type={"text"}
      />
      <p className="text-sub text">
        In monday.com, "boards" are the place where all your content lives.
      </p>
    </div>
  );
}

export default CreateBoardName;
