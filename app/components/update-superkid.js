import Ember from 'ember';

export default Ember.Component.extend({
  updateSuperkidForm: false,
  actions: {
    updateSuperkidForm() {
      this.set('updateSuperkidForm', true);
    },
    update(superkid) {
      var params = {
        name: this.get('name'),
        age: this.get('age'),
        powers: this.get('powers'),
        rate: this.get('rate'),
        image: this.get('image')
      };
      this.set('updateSuperkidForm', false);
      this.sendAction('update', superkid, params)
    }
  }
});
