import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findRecord('user', '-K3GIRQUOzq3a8lGirBq'); // <- I'll give you an ID to use
    }
});
