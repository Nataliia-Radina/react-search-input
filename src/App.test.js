import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders correctly', () => {
    const component = renderer.create(
        <App/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});