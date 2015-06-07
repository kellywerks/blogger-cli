import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //route vs resource - route is static pages, resource is model-backed, dynamic
  //resource is a 'thing', route is something to do with a 'thing'
  this.resource('posts', { path: '/'});
  this.resource('post', { path: '/posts/:post_id'});
  //when prefaced by a colon, it is a 'path segment' which is a dynamic element
  //tells ember 'go find a post with a post_id that is present in the path segment'
  this.route('about');
  this.resource('recent-comments');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});

export default Router;
