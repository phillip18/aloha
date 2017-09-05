import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mahalo');
  this.route('surfboards')
  this.route('beaches', {path: 'beaches/:beach_id'});
  this.route('movie-review');
  this.route('movies');
});

export default Router;