import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', { path: '/'});
  this.route('about');
  this.resource('recent-comments');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});

export default Router;
