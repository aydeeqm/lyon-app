import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/CategoryListLayout';
import Empty from '../components/Empty';
import Sepatator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  renderSeparator = () => <Sepatator />;
  renderItem = ({ item }) => <Suggestion {...item} />;
  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CategoryList;
