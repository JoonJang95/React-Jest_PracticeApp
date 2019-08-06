import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import App from "./App";

describe("Examining the syntax of Jest tests", () => {
  it("sums numbers", () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});

describe("First React component test with Enzyme", () => {
  const wrapper = mount(<App />);

  it("renders without crashing", () => {
    // wrapper.update();
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
