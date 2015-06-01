import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  accounts: DS.hasMany('account', {async: true}),
});
