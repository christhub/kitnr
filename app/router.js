import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {
    path: 'posts'
  }, function() {
    this.route('new');
  });

  this.route('user', {
    path: 'profile/:user_id'
  });
});

export default Router;
