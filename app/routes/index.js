import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('superkid');
  },

  actions: {
    save(params) {
      var newSuperkid = this.store.createRecord('superkid', params);
      newSuperkid.save();
      this.transitionTo('index');
    },
    delete(superkid) {
      superkid.destroyRecord();
      this.transitionTo('index');
    },
    update(superkid, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          superkid.set(key,params[key]);
        }
      });
      superkid.save();
      this.transitionTo('index');
    }
  }
});
