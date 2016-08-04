// Injects state and action dispatchers into the QuoteSectionView, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { fetchQuote } from '../actions';
import QuoteSectionView from '../components/QuoteSectionView';

function mapStateToProps(state) {
  return {
    fetchingQuote: state.quote.fetching,
    quote: state.quote.quote,
    author: state.quote.author,
    fetchError: state.quote.fetchError,
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchQuote: () => dispatch(fetchQuote()) };
}

const QuoteSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteSectionView);

export default QuoteSection;
