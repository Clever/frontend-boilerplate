import { shallow } from "enzyme";
import * as React from "react";

import { QuoteSectionView } from "../../components/QuoteSection";

// Asserts that each element in testCases matches the properties defined in the test case for a
// rendered QuoteSectionView
function assertQuoteSection(domElement, testCases) {
  for (const testCase of testCases) {
    const selector = `.QuoteSection--${testCase.element}`;

    if (testCase.expectedLength) {
      const actualLength = domElement.find(selector).length;
      expect(actualLength).toEqual(testCase.expectedLength);
    }

    if (testCase.expectedText) {
      const actualText = domElement.find(selector).text();
      expect(actualText).toEqual(testCase.expectedText);
    }
  }
}

describe("QuoteSection", () => {
  it("prompts to fetch quote at first", () => {
    const fetchSpy = sinon.spy();
    const quoteSection = shallow(<QuoteSectionView loading={false} load={fetchSpy} />);
    expect(quoteSection.find(".QuoteSection--welcome").length).toEqual(1);
    const fetchButton = quoteSection.find("Button");
    expect(fetchButton.length).toEqual(1);
    expect(fetchButton.props().value).toEqual("Get a random quote");
    expect(fetchSpy.called).toBeFalsy();
    fetchButton.simulate("click");
    expect(fetchSpy.calledOnce).toBeTruthy();
  });

  it("displays correct loading message while fetching quote", () => {
    for (const quotePresent of [true, false]) {
      const quoteSection = shallow(
        <QuoteSectionView loading load={() => undefined}
          quote={quotePresent ? "hello" : null} author={quotePresent ? "person" : null}
        />);


      const expectedText = quotePresent ? "Finding another computer science quote..." :
        "Finding a computer science quote...";

      const testCases = [
        { element: "welcome", expectedLength: 0 },
        { element: "loading", expectedLength: 1, expectedText },
        { element: "error", expectedLength: 0 },
      ];

      assertQuoteSection(quoteSection, testCases);
    }
  });

  it("displays a loading message and not an error when both present", () => {
    const quoteSection = shallow(
      <QuoteSectionView loading load={() => undefined} loadError={{ error: true }} />);

    const testCases = [
      { element: "welcome", expectedLength: 0 },
      { element: "loading", expectedLength: 1 },
      { element: "error", expectedLength: 0 },
    ];

    assertQuoteSection(quoteSection, testCases);
  });

  it("displays quote and author when provided, not fetching, and no outstanding error", () => {
    const author = "Jane Doe";
    const quote = "My quote";
    const quoteSection = shallow(
      <QuoteSectionView loading={false} load={() => undefined} quote={quote} author={author} />,
    );

    const testCases = [
      { element: "welcome", expectedLength: 0 },
      { element: "loading", expectedLength: 0 },
      { element: "error", expectedLength: 0 },
      { element: "author", expectedLength: 1, expectedText: `-${author}` },
      { element: "quote", expectedLength: 1, expectedText: quote },
    ];

    assertQuoteSection(quoteSection, testCases);
  });

  it("displays an error if quote fetching fails", () => {
    const quoteSection = shallow(
      <QuoteSectionView loading={false} load={() => undefined} loadError={{ error: true }} />,
    );

    const testCases = [
      { element: "welcome", expectedLength: 0 },
      { element: "loading", expectedLength: 0 },
      { element: "error", expectedLength: 1 },
      { element: "author", expectedLength: 0 },
      { element: "quote", expectedLength: 0 },
    ];

    assertQuoteSection(quoteSection, testCases);
  });

  it("displays an error if quote fetching fails, even with author and quote present", () => {
    const author = "Jane Doe";
    const quote = "My quote";
    const quoteSectionWithQuote = shallow(
      <QuoteSectionView loading={false} load={() => undefined} loadError={{ error: true }}
        author={author} quote={quote}
      />,
    );

    const testCases = [
      { element: "welcome", expectedLength: 0 },
      { element: "loading", expectedLength: 0 },
      { element: "error", expectedLength: 1 },
      { element: "author", expectedLength: 0 },
      { element: "quote", expectedLength: 0 },
    ];

    assertQuoteSection(quoteSectionWithQuote, testCases);
  });
});
