import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('accounts', {path: '/:namespace/accounts'});
  this.resource('transactions', {path: '/:namespace/:account'});
});

export default Router;
