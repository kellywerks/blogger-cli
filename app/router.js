import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', { path: '/'});
  this.resource('about');
  this.resource('recent-comments');
  this.resource('contact');
});

export default Router;
