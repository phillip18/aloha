export default function() {
  
  this.get('/movies', (schema) => {
    return schema.movies.all();
  });
}
