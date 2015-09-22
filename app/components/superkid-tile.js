import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false)
    },
    update(superkid, params) {
      this.sendAction('update', superkid, params);
    },
    delete(superkid) {
      if (confirm('Why would you do this?')) {
        this.sendAction('delete', superkid);
      }
    }
  }
});
