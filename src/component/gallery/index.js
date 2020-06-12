import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryModal from '../modalDetail/index';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      imgUrls: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('dogs')) {
      this.setState({ imgUrls: localStorage.getItem('dogs').split(',') });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dog !== this.props.dog) {
      this.state.imgUrls.push(this.props.dog);
      localStorage.setItem('dogs', this.state.imgUrls);
      this.setState({ imgUrls: localStorage.getItem('dogs').split(',') });
    }
  }

  renderImage = (src, index) => {
    return (
      <div key={src} onClick={(e) => this.openModal(e, index)}>
        <img src={src} alt='dog render' />
      </div>
    );
  };

  openModal = (e, index) => {
    this.setState({ currentIndex: index });
  };

  closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  };

  deleteImage = (image) => {
    this.closeModal();
    const data = this.state.imgUrls.filter(
      (item) => item !== this.state.imgUrls[this.state.currentIndex]
    );
    this.setState({ imgUrls: data });
    localStorage.setItem('dogs', data);
  };

  render() {
    return (
      <div className='gallery-container'>
        <div className='gallery-grid'>
          {this.state.imgUrls.length === 0
            ? null
            : this.state.imgUrls.map(this.renderImage)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          src={this.state.imgUrls[this.state.currentIndex]}
          deleteImage={this.deleteImage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dog: state.dog,
  };
};

export default connect(mapStateToProps)(Gallery);
