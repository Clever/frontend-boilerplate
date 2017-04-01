import { Button } from "clever-components";
import * as React from "react";
import { connect } from "react-redux";

import { fetchQuote } from "../store/quote";

require("./QuoteSection.less");

// Component
// View of the section of the page that displays a button to load and display a
// computer science quote.
// Presentational code only; state is passed as properties by the container,
// defined below.

export function QuoteSectionView({ author, load, loadError, loading, quote }) {
  let content = null;
  if (loading) {
    const verb = quote ? "Finding another" : "Finding a";
    content = <p className="QuoteSection--loading">{verb} computer science quote...</p>;
  } else {
    if (loadError) {
      content = (<p className="QuoteSection--error">
        There was an error finding a computer science quote. Please try again!
      </p>);
    } else {
      content = (quote ? (
        <div className="QuoteSection--content">
          <p className="QuoteSection--quote">{quote}</p>
          <p className="QuoteSection--author">-{author}</p>
        </div>) : <p className="QuoteSection--welcome">Find a random computer science quote!</p>);
    }
  }
  const buttonText = quote ? "Get another quote" : "Get a random quote";
  return (
    <div className="section QuoteSection">
      <h2>Computer Science Quotes</h2>
      {content}
      <Button type="primary" onClick={load} value={buttonText} />
    </div>
  );
}

QuoteSectionView.propTypes = {
  author: React.PropTypes.string,
  load: React.PropTypes.func.isRequired,
  loadError: React.PropTypes.object,
  loading: React.PropTypes.bool.isRequired,
  quote: React.PropTypes.string,
};

// Container
// Injects state and action dispatchers into the QuoteSectionView, thus decoupling the
// presentation from state management.

/**
 * The first argument to the Redux `connect` function is `mapStateToProps`.
 * It tells the React component how it can map data stored in the Redux store,
 * into the props that it expects.
 *
 * @param {*} state The current contents of the Redux store
 * @returns {*} An object whose keys are names of props the React component
 * expects (as defined in `propTypes`), and values are what should be passed
 * into those props.
 */
function mapStateToProps(state) {
  return {
    author: state.quote.author,
    loadError: state.quote.fetchError,
    loading: state.quote.fetching,
    quote: state.quote.text,
  };
}

/**
 * The second argument to the Redux `connect` function is `mapDispatchToProps`.
 * It provides the React component with props that contain functions that
 * can change the Redux store. These functions change the store by dispatching
 * actions that the Redux store listens for.
 *
 * This may look dissimilar to some examples online, because in our style of
 * redux, we usually provide functions that do the dispatching for you, so that
 * this component file can focus on the display of the component rather than
 * the mechanics of fetching data or making changes to the Redux store. For more
 * information on that, check out any of the /store/[reducer]/index.js files.
 *
 * @param {Function} dispatch A function that you can call to send actions to
 * the Redux store. When the Redux store receives an action, it decides how the
 * store should change and applies those changes.
 */
function mapDispatchToProps(dispatch) {
  return { load: () => fetchQuote(dispatch) };
}

const QuoteSection = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteSectionView);

export default QuoteSection;
