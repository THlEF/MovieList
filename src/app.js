var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];


// const movieLists = movies.map((movie) =>
//   <li>{movie.title}</li>
// );

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movieList: movies,
      addMovie: null
    };
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleSearch(event) {
    let text = event.target.value;
    let newMovieList = [];
    this.state.movieList.forEach((movie) => {
      if (movie.title.includes(text)) {
        newMovieList.push(movie);
      }
    });
    this.setState({
      movieList: newMovieList
    });
    if (event.target.value === '') { //handles when form is cleared
      this.setState({
        movieList: movies
      });
    }
  }

  handleAdd(event) {
    event.preventDefault();
  
    this.setState((state) => {
      let tempMovieList = state.movieList;
      tempMovieList.push(state.addMovie);
      return {
        movieList: tempMovieList
      };
    })
  }

  handleAddChange(event) {
    this.setState({
      addMovie: {title: event.target.value}
    });
  }

  render(){
    return(
      <div className="App">
        <form onSubmit={this.handleAdd}>
        <label>Add Movie </label>
          <input type="text" onChange={this.handleAddChange}/>
          {/* <button type="button" onClick={this.handleAdd}>Add!</button> */}
        </form>
        <form>
          <label>Search Movie </label>
          <input type="text" onChange={this.handleSearch}/>
        </form>
        <ul>
          {this.state.movieList.map((movie) => <li>{movie.title}</li>)};
        </ul>
      </div>
    );
  }
}
// onChange={this.handleAddChange} 
// export default App;

ReactDOM.render(<App />, document.getElementById("root"));