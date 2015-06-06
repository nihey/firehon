import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  value: DS.attr('number'),
  datetime: DS.attr('date', {defaultValue: function() {
    return new Date();
  }}),
  account: DS.belongsTo('account'),
});
