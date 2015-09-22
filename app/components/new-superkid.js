import Ember from 'ember';

export default Ember.Component.extend({
  addNewSuperkid: false,
  actions: {
    superkidFormShow() {
      this.set('addNewSuperkid', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        powers: this.get('powers'),
        rate: this.get('rate'),
        image: this.get('image')
      };
      this.set('addNewSuperkid', false),
      this.sendAction('save', params);
    }
  }
});
