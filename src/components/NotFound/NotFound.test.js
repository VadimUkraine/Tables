import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => render(
  <Provider store={store}>
     <NotFound />
  </Provider>,
));

test('it renders component', () => {
  expect(screen.getByRole('link', { name: 'Back to main page' })).toBeInTheDocument();
});
