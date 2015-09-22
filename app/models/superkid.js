import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  age: DS.attr(),
  powers: DS.attr(),
  rate: DS.attr(),
  image: DS.attr()
});
