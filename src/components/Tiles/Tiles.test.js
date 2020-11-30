import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Tiles from './Tiles';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => {
  const history = createMemoryHistory();
  history.push('/tiles');
  render(
    <Provider store={store}>
      <Router history={history}>
        <Tiles />
      </Router>
    </Provider>,
  );
});

test('it renders component', () => {
  expect(screen.getByRole('link', { name: 'Back' })).toBeInTheDocument();
});
