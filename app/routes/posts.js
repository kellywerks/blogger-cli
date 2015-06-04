//route provides a way to feed fixture data to app
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});
