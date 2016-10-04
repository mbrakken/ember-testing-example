import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  title        : attr('string'),
  body         : attr('string'),
  published_at : attr('date'),
  author       : belongsTo('author'),
  comments     : hasMany('comment'),

  is_published : computed.bool('published_at')

});
