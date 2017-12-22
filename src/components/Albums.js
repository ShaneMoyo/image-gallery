import React, { PureComponent } from 'react';
import albumsAPI from '../services/albumsAPI';
import { onDeleteAlbum, onAddAlbum, loadAlbums } from './actions';
import AddAlbum from './add-album';
import { NavLink } from 'react-router-dom';

const Link = props => <NavLink {...props}
  className="nav-link"
  activeClassName="active"
/>;

export default class Albums extends PureComponent {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const albums = await albumsAPI.get(this.getAlbumId());
    const newState = loadAlbums(this.state, albums);
    this.setState(newState);
  }

  getAlbumId() {
    return this.props.match.params.id;
  }

  handleDelete = async id => {
    await albumsAPI.remove(id);
    const newState = onDeleteAlbum(this.state, id);
    this.setState(newState);
  }

  handleAdd = async (albumData) => {
    const album = await albumsAPI.add(albumData);
    const newState = onAddAlbum(album, this.state);
    this.setState(newState);
  }

  render() {
    const albumList = this.state.albums.map((album, index) => {
      const listItem = album.name ?
        <li key={index}><Link exact to={`/albums/${album._id}`}>{album.name}</Link></li> : null;
      return listItem;
    });
    return (
      <div>
        <ul>
          {albumList}
        </ul>
        <AddAlbum handleAdd={album => this.handleAdd(album)} />
      </div>
    );
  }
}