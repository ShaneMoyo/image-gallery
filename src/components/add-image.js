import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends PureComponent {
  render() {
    const { handleAdd, albumId } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const imageData = {
          title: elements.title.value,
          url: elements.url.value,
          description: elements.description.value,
          album: albumId
        };
        handleAdd(imageData);
        elements.title.value = '';
        elements.url.value = '';
        elements.description.value = '';
      }}>
        <label>Title: </label>
        <input name="title" type="text" />
        <br/>
        <label>URL: </label>
        <input name="url" type="text" />
        <br/>
        <label>Description: </label>
        <input name="description" type="text"/>
        <br/>
        <button type="submit">Add</button>
      </form>
    ); 
  }
}
AddImage.propTypes = {
  handleAdd: PropTypes.func
};

