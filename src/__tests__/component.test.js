import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddImage from '../components/add-image'; 
import Gallery from '../components/Gallery'; 
import List from '../components/List';
import Thumbnail from '../components/Thumbnail';


const images =[
  {
    _id: 1,
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  },
  { 
    _id: 2,
    title: 'Cute Bunny2',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
  },
  { 
    _id: 3,
    title: 'Cute Bunny3',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
  }
];

describe('components', () => {

 
    
  it('should render AddImage component', () => {
    const wrapper = shallow(<AddImage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render Gallery component', () => {
    const wrapper = shallow(<Gallery images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render List component', () => {
    const wrapper = shallow(<List images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render Thumbnail component', () => {
    const wrapper = shallow(<Thumbnail images={images}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});