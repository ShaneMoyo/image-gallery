import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddAlbum extends PureComponent {
  render() {
    const { handleAdd } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const albumData = {
          name: elements.name.value,
        };
        handleAdd(albumData);
        elements.name.value = '';
      }}>
        <label>Title: </label>
        <input name="name" type="text" />
        <button type="submit">Add</button>
      </form>
    ); 
  }
}
AddAlbum.propTypes = {
  handleAdd: PropTypes.func
};

