import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import QuoteSectionView from '../../components/QuoteSectionView';

describe('QuoteSection', () => {
  it('prompts to fetch quote at first', () => {
    const fetchSpy = sinon.spy();
    const quoteSection = shallow(<QuoteSectionView fetchingQuote={false} fetchQuote={fetchSpy} />);
    assert.equal(quoteSection.find('.QuoteSection--welcome').length, 1);
    const fetchButton = quoteSection.find('Button');
    assert.equal(fetchButton.length, 1);
    assert.equal(fetchButton.props().value, 'Get a random quote');
    assert(!fetchSpy.called);
    fetchButton.simulate('click');
    assert(fetchSpy.calledOnce);
  });

  it('displays correct loading message while fetching quote', () => {
    for (const quotePresent of [true, false]) {
      const quoteSection = shallow(
        <QuoteSectionView fetchingQuote fetchQuote={() => {}}
          quote={quotePresent ? 'hello' : null} author={quotePresent ? 'person' : null}
        />);
      assert.equal(quoteSection.find('.QuoteSection--welcome').length, 0);
      const loadingDom = quoteSection.find('.QuoteSection--loading');
      assert.equal(loadingDom.length, 1);
      const expectedText = quotePresent ? 'Finding another computer science quote...' :
        'Finding a computer science quote...';
      assert.equal(loadingDom.text(), expectedText);
    }
  });

  it('displays a loading message and not an error when both present', () => {
    const quoteSection = shallow(
      <QuoteSectionView fetchingQuote fetchQuote={() => {}} fetchError={{ error: true }} />);
    assert.equal(quoteSection.find('.QuoteSection--welcome').length, 0);
    assert.equal(quoteSection.find('.QuoteSection--error').length, 0);
    assert.equal(quoteSection.find('.QuoteSection--loading').length, 1);
  });

  it('displays quote and author when provided, not fetching, and no outstanding error', () => {
    const author = 'Jane Doe';
    const quote = 'My quote';
    const quoteSection = shallow(
      <QuoteSectionView fetchingQuote={false} fetchQuote={() => {}} quote={quote} author={author} />
    );

    const expectedLengths = {
      welcome: 0,
      loading: 0,
      error: 0,
      author: 1,
      quote: 1,
    };

    for (const element in expectedLengths) {
      if (!expectedLengths.hasOwnProperty(element)) {
        continue;
      }
      assert.equal(quoteSection.find(`.QuoteSection--${element}`).length, expectedLengths[element]);
    }
    assert.equal(quoteSection.find('.QuoteSection--author').text(), `-${author}`);
    assert.equal(quoteSection.find('.QuoteSection--quote').text(), quote);
  });

  it('displays an error if quote fetching fails', () => {
    const quoteSection = shallow(
      <QuoteSectionView fetchingQuote={false} fetchQuote={() => {}} fetchError={{ error: true }} />
    );

    const expectedLengths = {
      welcome: 0,
      loading: 0,
      error: 1,
      author: 0,
      quote: 0,
    };

    for (const element in expectedLengths) {
      if (!expectedLengths.hasOwnProperty(element)) {
        continue;
      }
      assert.equal(quoteSection.find(`.QuoteSection--${element}`).length, expectedLengths[element]);
    }
  });

  it('displays an error if quote fetching fails, even with author and quote present', () => {
    const author = 'Jane Doe';
    const quote = 'My quote';
    const quoteSectionWithQuote = shallow(
      <QuoteSectionView fetchingQuote={false} fetchQuote={() => {}} fetchError={{ error: true }}
        author={author} quote={quote}
      />
    );

    const expectedLengths = {
      welcome: 0,
      loading: 0,
      error: 1,
      author: 0,
      quote: 0,
    };

    for (const element in expectedLengths) {
      if (!expectedLengths.hasOwnProperty(element)) {
        continue;
      }
      assert.equal(quoteSectionWithQuote.find(`.QuoteSection--${element}`).length,
                   expectedLengths[element]);
    }
  });
});
