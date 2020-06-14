import React, { Component } from 'react';
import { Tooltip, Button, notification } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import UpdateTooltipModal from '../modalTooltip/index';
import { StyledDiv } from './style';

class GalleryModal extends Component {
  close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.'
    );
  };

  openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type='primary'
        size='small'
        onClick={() => {
          notification.close(key);
          this.props.deleteImage();
        }}
      >
        Confirm
      </Button>
    );
    notification.open({
      description: 'Are you sure you want to remove this image?',
      btn,
      key,
      onClose: this.close,
    });
  };

  render() {
    const {
      closeModal,
      src,
      handleShowModal,
      placement,
      color,
      title,
    } = this.props;

    if (!src) {
      return null;
    }

    return (
      <div>
        <div className='modal-overlay' onClick={closeModal}></div>
        <div className='modal'>
          <div className='modal-body'>
            <a href='/#' className='modal-close' onClick={closeModal}>
              &times;
            </a>
            <Tooltip
              placement={placement}
              color={color}
              title={title}
              key={src}
            >
              <img src={src} alt='modal render' />
            </Tooltip>
            <StyledDiv>
              <div align='middle'>
                <Button className='button-modal' onClick={handleShowModal}>
                  Change Tooltip
                </Button>
                <Button
                  danger
                  className='button-modal'
                  onClick={this.openNotification}
                >
                  Delete Image
                </Button>
              </div>
            </StyledDiv>
            <UpdateTooltipModal />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    placement: state.placement,
    color: state.color,
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowModal: () => {
      dispatch({ type: 'SHOW_MODAL_UPDATE_TOOLTIP' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal);
