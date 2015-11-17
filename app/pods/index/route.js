import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', {
      orderBy:'user',
      equalTo: '-K3GIRQUOzq3a8lGirBq'
    });
  },
  actions: {
    deletePost(kitn) {
      kitn.destroyRecord();
    }
  }
});
