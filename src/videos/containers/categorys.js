import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Empty from '../components/empty';
import Separetor from '../../sections/components/horizontalSeparator';
import Category from '../components/category';
import CategoriysLayout from '../components/categorysLayout';
import {connect} from 'react-redux';

class Categorys extends Component {
  keyExtractor = item => item.id.toString();
  renderItemSeparetor = () => <Separetor />;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };

  render() {
    return (
      <CategoriysLayout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderItemSeparetor}
          renderItem={this.renderItem}
        />
      </CategoriysLayout>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    list: state.categoryList,
  };
}

export default connect(mapStateToProps)(Categorys);
