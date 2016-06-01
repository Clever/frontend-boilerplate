// Injects state and action dispatchers into the QuoteSectionView, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { fetchQuote } from '../actions';
import QuoteSectionView from '../components/QuoteSectionView';

const mapStateToProps = (state) => ({
  fetchingQuote: state.quote.fetching,
  quote: state.quote.quote,
  author: state.quote.author,
  fetchError: state.quote.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteSectionView);
