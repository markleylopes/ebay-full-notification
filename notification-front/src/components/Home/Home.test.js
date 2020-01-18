/* eslint-disable */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Home from './index';

describe('<App/>', () => {
  const mockStore = configureStore();
  it('Home component render without crashing', async () => {
    const store = mockStore();
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(getByText('Cadastre suas notificações')).toBeInTheDocument();
  });
});
