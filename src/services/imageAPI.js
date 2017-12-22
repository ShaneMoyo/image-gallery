import api from './api';

export default {
  get(id) {
    if (id) return api.get(`/images?album=${id}`);
  },
  add(image) {
    return api.post('/images', image);
  },
  remove(id) {
    return api.delete(`/images/${id}`);
  }
};