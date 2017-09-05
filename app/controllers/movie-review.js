import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    addReview(){
      this.set('model.newReview.id', this.get('model').reviewList.length +1);
      let pushReview = {
        id: this.get('model').newReview.id,
        title: this.get('model').newReview.title,
        reviewText: this.get('model').newReview.reviewText
      };
      this.get('model').reviewList.pushObject(pushReview);
    }
  }
});
