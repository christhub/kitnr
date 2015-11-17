import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    deletePost(kitn) {
      kitn.destroyRecord();
      this.transitionTo('post.index');
    }
  },
});
