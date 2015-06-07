import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    // Model Hook is called only when the page is accessed via direct
    // navigation
    var namespace = this.store.fetch('namespace', btoa(model.namespace));
    controller.set('model', namespace);
  },
});
