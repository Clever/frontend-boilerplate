// Injects state and action dispatchers into the IpSectionView, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { getIpAddress } from '../actions';
import IpSectionView from '../components/IpSectionView';

const mapStateToProps = (state) => ({
  fetchingIp: state.ip.fetching,
  ipAddress: state.ip.address,
  fetchError: state.ip.fetchError,
});

const mapDispatchToProps = (dispatch) => ({
  getIpAddress: () => {
    dispatch(getIpAddress());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IpSectionView);
