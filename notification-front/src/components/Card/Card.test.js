/* eslint-disable */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Card from './index';

describe('<App/>', () => {
  it('Card component render without crashing', () => {
    const cardProps = {
      email: 'walissonmarkley@gmail.com',
      keywords: 'cachorro',
      notificationInterval: 30,
    };

    const { getByText } = render(<Card {...cardProps} />);
    expect(getByText('Email: walissonmarkley@gmail.com')).toBeInTheDocument();
  });
});
