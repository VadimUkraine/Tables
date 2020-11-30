import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Sponsorships from './Sponsorships';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Provider store={store}>
      <Router history={history}>
        <Sponsorships />
      </Router>
    </Provider>,
  );
});

test('it renders component', () => {
  expect(screen.getByRole('link', { name: 'Next Table' })).toBeInTheDocument();
});
