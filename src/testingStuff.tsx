import React from "react";

type TestComponentT = {
  children: React.ReactElement;
  some: string;
};

const TestComponent: React.FC<TestComponentT> = ({ children, some }) => {
  console.log(some);
  return (
    <div className="container bg-neutral-700 text-white w-[1000px] h-[300px]">
      {children}
    </div>
  );
};

export default TestComponent;

// USAGE
<TestComponent some="its some bullshit text">
  <>
    <div className="bg-red-100 text-black text-4xl">
      its children Element for test component
    </div>
    <div className="text-black text-4xl bg-blue-200 hover:bg-red-200">
      its second Element
    </div>
  </>
</TestComponent>;
