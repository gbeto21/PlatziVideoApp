import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import SugeestionsLayout from '../components/sugeestionsLayout';
import Empty from '../components/empty';
import Separetor from '../components/verticalSeparetor';
import Sugestion from '../components/sugeestion';
import {connect} from 'react-redux';

class Suggestions extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="Sin sugerencias" />;
  renderItemSeparetor = () => <Separetor />;
  viewMovie = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
  };

  renderItem = ({item}) => {
    return (
      <Sugestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  render() {
    return (
      <SugeestionsLayout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderItemSeparetor}
          renderItem={this.renderItem}
        />
      </SugeestionsLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.suggestionList,
  };
}

export default connect(mapStateToProps)(Suggestions);
