import React, { Component } from "react";
import "./App.css";
import Search from "./component/Search";
import MovieList from "./component/MovieList";
import Rating from "./component/Rating";

const movies = [
  {
    id: "visavis",
    title: "vis à vis",
    rating: "5",
    image:
      "https://cimaclub.com/wp-content/uploads/2016/12/MV5BM2MyNjFhZGYtMmI1ZC00Nzk0LWIwZjktMzMxZTk1YTQ2NWNhXkEyXkFqcGdeQXVyNDQ4NTM2ODE@._V1_SX715_CR00715999_AL_-e1516998816811.jpg"
  },
  {
    id: "elcuerpo",
    title: "El Cuerpo",
    rating: "4",
    image: "https://images.fr.shopping.rakuten.com/photo/1166329382.jpg"
  },
  {
    id: "licifer",
    title: "lucifer",
    rating: "3",
    image:
      "https://www.tomsguide.fr/content/uploads/sites/2/2020/02/lucifer-saison6.jpg"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 1,
      moviesArray: movies,
      titleSearch: ""
    };
  }
  addNewMovie(newMovie) {
    this.setState({
      ...this.state,
      moviesArray: [...this.state.moviesArray, newMovie]
    });
  }

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.titleSearch}
          onChange={newTitle => {
            this.setState({
              titleSearch: newTitle
            });
          }}
        />
        <Rating
          className="rating"
          etoile={this.state.minRating}
          onChange={newRating => {
            this.setState({
              minRating: newRating
            });
          }}
        />
        <MovieList
          className="Card"
          movies={this.state.moviesArray.filter(
            el =>
              el.rating >= this.state.minRating &&
              el.title
                .trim()
                .toLowerCase()
                .includes(this.state.titleSearch.trim().toLowerCase())
          )}
          onAddMovie={newMovie => this.addNewMovie(newMovie)}
        />
      </div>
    );
  }
}

export default App;
