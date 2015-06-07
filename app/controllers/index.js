import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /* Access a namespace, and if it does not exist, create it. */
    access: function() {
      var id = btoa(this.get('namespace'));
      this.store.find('namespace', id).then(() => {
        this.transitionToRoute('accounts', {namespace: this.get('namespace')});
      },
      () => {
        this.store.createRecord('namespace', {
          id,
          name: this.get('namespace'),
        }).save().then(() => {
          this.transitionToRoute('accounts', {namespace: this.get('namespace')});
        });
      });
    },
  },
});
