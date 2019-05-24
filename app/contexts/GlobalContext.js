/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import axios from 'axios';
import config from '../config';

// API key for pixabay.
const { apiKey } = config;

const GlobalContext = createContext();

export const GlobalConsumer = GlobalContext.Consumer;

// GlobalProvider contains global state as a component.
// Wraps entire application (root/App.js).
export class GlobalProvider extends Component {
  state = {
    query: '',
    queryPixabay: this.queryPixabay,
    docs: null,
    selectedImage: null,
  }
  // TODO: seperate contexts. This format causes everything to rerender on update.

  // docs https://pixabay.com/api/docs/
  // defaults to 20 images unless added per_page key in params
  queryPixabay(query) {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
      },
    })
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        state: this.state, 
        updateKey: (key, value) => this.setState({
          [key]: value
        }),
      }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
