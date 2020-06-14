import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledButton } from './style.js';

class Image extends Component {
  render() {
    const { fetching, onRequestDog, error } = this.props;

    return (
      <div>
        {fetching ? (
          <StyledButton type='dashed' disabled>
            Fetching...
          </StyledButton>
        ) : (
          <StyledButton type='dashed' onClick={onRequestDog}>
            Load an image
          </StyledButton>
        )}
        {error && <p style={{ color: 'red' }}>Something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => {
      dispatch({ type: 'API_CALL_REQUEST' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
