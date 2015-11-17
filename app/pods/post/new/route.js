import Ember from 'ember';

export default Ember.Route.extend({
  model() {
        return this.store.createRecord('post');
    },
  resetController(controller, isExiting) {
    if(isExiting && this.currentModel.get('isNew')) {
        controller.get('model').destroyRecord();
    }
  },
  actions: {
    save() {
        let userModel = this.modelFor('application');
        let rand = Math.ceil(Math.random() * 9);

        this.currentModel.setProperties({
            image: `kitten${rand}.jpg`,
            createdAt: new Date(),
            user: userModel
        });

        this.currentModel.save().then(() => {
          return userModel.save();
        }).then(() => {
          this.transitionTo('post.index');
        });
    }
  }
});
