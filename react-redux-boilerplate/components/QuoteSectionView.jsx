// View of the section of the page that displays a button to fetch and display a computer science
// quote.
// Presentational code only; state is passed as properties by the container.
import { Button } from 'clever-components';
import React, { PropTypes } from 'react';

const QuoteSectionView = ({ fetchError, fetchingQuote, quote, author, fetchQuote }) => {
  let content = null;
  if (fetchingQuote) {
    const verb = quote ? 'Finding another' : 'Finding a';
    content = <p>{verb} computer science quote...</p>;
  } else {
    if (fetchError) {
      content = <p>There was an error finding a computer science quote. Please try again!</p>;
    } else {
      content = (quote ? <div><p>{quote}</p><p><strong>-{author}</strong></p></div> :
                 <p>Find a random computer science quote!</p>);
    }
  }
  const buttonText = quote ? 'Get another quote' : 'Get a random quote';
  return (
    <div className="section regenerate">
      <h2>Computer Science Quotes</h2>
      {content}
      <Button type="primary" onClick={fetchQuote} value={buttonText} />
    </div>
  );
};

QuoteSectionView.propTypes = {
  fetchError: PropTypes.object,
  fetchingQuote: PropTypes.bool.isRequired,
  quote: PropTypes.string,
  author: PropTypes.string,
  fetchQuote: PropTypes.func.isRequired,
};

export default QuoteSectionView;
