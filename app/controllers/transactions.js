import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTransaction: function() {
      this.store.createRecord('transaction', {
        description: this.get('description'),
        value: this.get('value'),
        account: this.model,
      }).save().then(() => {
        this.model.save();
      });
    },
  },
});
