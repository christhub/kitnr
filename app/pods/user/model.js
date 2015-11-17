import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  gravatar: Ember.computed('email', function() {
    return md5(this.get('email'));
  }),
  posts: DS.hasMany('post')
});
