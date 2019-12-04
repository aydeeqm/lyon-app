import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/CategoryListLayout';
import Empty from '../components/Empty';
import Sepatator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  renderSeparator = () => <Sepatator />;
  renderItem = ({ item }) => <Category {...item} />;
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
