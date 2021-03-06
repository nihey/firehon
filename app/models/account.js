import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  namespace: DS.belongsTo('namespace'),
  transactions: DS.hasMany('transaction', {async: true}),
});
