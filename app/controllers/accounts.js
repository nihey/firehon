import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAccount: function() {
      this.store.createRecord('account', {
        name: this.get('account'),
        namespace: this.model,
      }).save().then(() => {
        this.model.save();
      });
    },

    accountDetails: function(id) {
      this.transitionToRoute('transactions', this.model.get('name'), id)
    },
  },
});
