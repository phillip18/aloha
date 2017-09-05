import Ember from 'ember';

let movieDetails = {
  title: 'Rogue One',
  releaseDate: '2017',
  description: 'A Star Wars saga movie',
  reviewList: [
    {id: 1, title: '1st Review', reviewText: 'blah, blah' },
    {id: 2, title: 'Subjective Review', reviewText: 'blah, blah' },
    {id: 3, title: 'Biased Review', reviewText: 'Fuking Geek' }
  ],
  newReview: {id: 0, title:'', reviewText: '' }
}
export default Ember.Route.extend({
  model(){
    return movieDetails;
  }
});
