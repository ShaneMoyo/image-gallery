import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends PureComponent {
  constructor(){
    super();
    this.state = {
      index: 0
    };
  }
  handleImageSelection(value){
    let i = value === 'next' ? 1: -1;
    this.setState({ index: this.state.index + i });
  }
  render(){
    const { images } = this.props;
    const limit = this.state.index === images.length - 1; 
    const currentImage = images.length ? images[this.state.index] : null;
    const display = currentImage ? <img src={currentImage.url} alt={currentImage.description} height="40%" width="40%"/> : null;
    const next = !limit ? <input type="button" value="next" onClick={({ target }) => this.handleImageSelection(target.value)}/> : null;
    const back = this.state.index !== 0 ? <input type="button" value="back" onClick={({ target }) => this.handleImageSelection(target.value)}/> : null;
    return(
      <div>
        {next}
        {back}
        <br/>
        {display}
      </div>
    );
  }
}
Gallery.propTypes = {
  images: PropTypes.array
};

