import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

let count = 0;

export default Controller.extend({
  name: 'ember-chat',
  exampleService: service(),
  init() {
    this._super(...arguments);
    this.get('exampleService');
    this.set('name', `ember-chat-${++count}`);
  },

  userDetails: computed('model.name', function() {
    const id = Math.floor(Math.random() * 1000); ;
    return `${this.model.name} (${id})`;
  })
});
