import React from "react";

const Some = () => {
  const SomeComponent = (props) => {
    return (
      <div {...props} id="21">
        hello
      </div>
    );
  };

  return (
    <div>
      <SomeComponent className={"bg-red-200"} />
    </div>
  );
};

export default Some;
