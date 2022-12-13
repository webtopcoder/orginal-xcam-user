/* eslint-disable no-nested-ternary */
import React from 'react';

function Error({ statusCode, message = '' }: any) {
  return (
    <p style={{ textAlign: 'center' }}>
      {message
        ? `${statusCode} - ${message}`
        : statusCode
          ? `${statusCode} - An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
