import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Sepatator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  renderSeparator = () => <Sepatator />;
  renderItem = ({ item }) => <Suggestion {...item} />;
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      },
    ];
    return (
      <Layout title="Recomendado para tí">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
