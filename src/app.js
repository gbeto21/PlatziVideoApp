import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import Suggestions from './videos/containers/suggestions';
import Categorys from './videos/containers/suggestions';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

class AppLayout extends Component {
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {categories},
    });

    const categories = await API.getMovies();
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {suggestionList},
    });
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories,
    // });
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    }

    return (
      <Home>
        <Header />
        <Search />
        <Categorys />
        <Suggestions />
      </Home>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

export default connect(mapStateToProps)(AppLayout);
