import Ember from 'ember';

export function formatDate(params) {
  var [date] = [params];
  return date.toLocaleString();
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
