import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    const component = shallow(<App/>)
    expect(component.exists()).toEqual(true);
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
});
