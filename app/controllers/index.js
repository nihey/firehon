import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    access: function() {
      this.store.createRecord('namespace', {
        id: btoa(this.get('namespace')),
        name: this.get('namespace'),
      }).save();
    },
  },
});
