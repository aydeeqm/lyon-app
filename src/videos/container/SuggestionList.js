import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Sepatator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
import { connect } from 'react-redux';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  renderSeparator = () => <Sepatator />;
  renderItem = ({ item }) => <Suggestion {...item} />;
  render() {
    return (
      <Layout title="Recomendado para tí">
        <FlatList
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

function mapStateToProps(state) {
  return {
    list: state.suggestionList,
  };
}

export default connect(mapStateToProps)(SuggestionList);
