import React, { PureComponent } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import imageAPI from '../services/imageAPI';
import { onDelete, onAdd, loadImages } from './actions';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, 
  NavLink } from 'react-router-dom';

const HeaderLink = props => <NavLink {...props} 
  className="nav-link" 
  activeClassName="active"
/>;

export default class View extends PureComponent {
  constructor(){
    super();
    this.state = {
      images: []
    };
  }
  async componentDidMount() {
    const images = await imageAPI.get();
    console.log('Received from get', images);
    const newState = loadImages(this.state, images);
    this.setState(newState);
  }
  handleDelete(imageId){
    this.setState(onDelete(imageId, this.state));
  }

    handleAdd = (imageData) => {
      this.setState(onAdd(imageData, this.state));
    }

    render(){
      const { images } = this.state;
      return(
        <Router>
          <div>
            <nav>
              <li>
                <HeaderLink exact to="/images/gallery">Gallery</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/images/list">List</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/images/thumbnail">Thumbnail</HeaderLink>
              </li>
            </nav>
            <Switch>
              <Route exact path="/images/gallery" render={() => <Gallery images={images} {...this.props} />}/>
              <Route exact path="/images/thumbnail" render={() => <Thumbnail images={images} {...this.props} />}/>
              <Route exact path="/images/list" render={() => <List images={images} 
                handleDelete={imageId => this.handleDelete(imageId)}
                handleAdd={image => this.handleAdd(image)} {...this.props} />}/>
              <Redirect to="/images/gallery"/>
            </Switch>
          </div>
        </Router>
      );
    }
}
