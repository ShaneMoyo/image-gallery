import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddImage from './add-image';


export default class List extends PureComponent {
  render(){
    const { images, handleDelete, handleAdd, albumId } =this.props;
    const list = !images ? null : images.map((image, i) => {
      const listItem = 
            <tr key={i}>
              <td><a href={image.url}>{image.title}</a></td>
              <td>
                <input data-value={image._id} type="button" value="X"
                  onClick ={({ target }) => handleDelete(target.dataset.value)}/>
              </td>
            </tr>;
      return listItem;
    });    
    return(
      <div>
        <table>
          <tbody>
            {list}
          </tbody>
        </table>
        <AddImage handleAdd={handleAdd} albumId={albumId} />
      </div>
    );
  }
}

List.propTypes = {
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  images: PropTypes.array
};