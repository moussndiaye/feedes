import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	  this.controllerFor("application").clearActive();
	  this.controllerFor("application").set('classOu', "active");
	  return this.store.find('produit', 1);
	}
});
