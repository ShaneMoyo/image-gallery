import { onAdd, onDelete } from './components/actions';

const testState = {
  images: [
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
  ],
};
describe('action tests', () => {

  it('should remove an image from state', () => {

    const newState = onDelete(testState, 1);
    const checkState = { ...testState };
    checkState.images = testState.images.slice();
    checkState.images.shift();

    expect(newState).toEqual(checkState);
  });

  it('should add an image from state', () => {

    const testImage = { 
      title: 'testBunny',
      description: 'test',
      url: 'test url'
    };

    const newState = onAdd(testImage, testState);
    const imagesLength = newState.images.length;
    expect(imagesLength).toBe(4);
  });
  

});