import React from "react";
import { shallow } from "enzyme";
import UserLoginForm from "./UserLoginForm";

describe("shallow UserLoginForm", () => {
  it("renders", () => {
    let wrapper = shallow(<UserLoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
