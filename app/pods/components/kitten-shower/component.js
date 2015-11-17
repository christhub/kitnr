import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(kitn) {
      this.sendAction('deletePost', kitn);
    }
  }
});
