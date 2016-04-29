// View of the section of the page that displays a button to fetch and display your IP address.
// Presentational code only; state is passed as properties by the container.
import { Button } from 'clever-components';
import React, { PropTypes } from 'react';

const IpSectionView = ({ fetchError, fetchingIp, ipAddress, getIpAddress }) => {
  let content = null;
  if (fetchingIp) {
    const verb = ipAddress ? 'Re-fetching' : 'Fetching';
    content = <p>{verb} your IP address...</p>;
  } else {
    if (fetchError) {
      content = <p>There was an error retrieving your IP address. Try again!</p>;
    } else {
      content = (ipAddress ? <p>Your IP Address is <strong>{ipAddress}</strong></p> :
                 <p>Fetch your IP address!</p>);
    }
  }
  return (
    <div className="section regenerate">
      <h2>IP Address</h2>
      {content}
      <Button type="primary" onClick={getIpAddress} value="Get IP Address" />
    </div>
  );
};

IpSectionView.propTypes = {
  fetchError: PropTypes.object,
  fetchingIp: PropTypes.bool.isRequired,
  ipAddress: PropTypes.string,
  getIpAddress: PropTypes.func.isRequired,
};

export default IpSectionView;
