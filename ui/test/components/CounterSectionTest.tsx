import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import { CounterSectionView } from "../../components/CounterSection";

describe("CounterSection", () => {
  it("displays the counter", () => {
    const testValues = [0, 6, 24, -2, 5];

    for (const value of testValues) {
      const incrementCounter = sinon.spy();
      const counterSection = shallow(
        <CounterSectionView value={value} increment={incrementCounter} />);
      const valueDom = counterSection.find(".CounterSection--value");
      expect(valueDom.length).toEqual(1);
      expect(valueDom.text()).toEqual(value);
      const buttonDom = counterSection.find("Button");
      expect(buttonDom.length).toEqual(1);
    }
  });

  it("increments the counter when button clicked", () => {
    const incrementCounter = sinon.spy();
    const counterSection = shallow(
      <CounterSectionView value={0} increment={incrementCounter} />);
    const buttonDom = counterSection.find("Button");
    expect(incrementCounter.called).toBeFalsy();
    buttonDom.simulate("click");
    expect(incrementCounter.calledOnce).toBeTruthy();
    expect(incrementCounter.calledWith()).toBeTruthy();

    const numIterations = 5;
    for (let curIter = 0; curIter < numIterations; curIter++) {
      buttonDom.simulate("click");
      // add 2 since 0-indexed and already called once
      expect(incrementCounter.callCount).toEqual(curIter + 2);
    }
  });
});
