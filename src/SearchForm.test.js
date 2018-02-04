import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Button from './Button';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('<SearchForm />', () => {

    const wrapper = shallow(<SearchForm />);
    const input = wrapper.find('input');
    const clearButton = wrapper.find(Button).first();

    it('renders two <Button /> components', () => {
        expect(wrapper.find(Button)).to.have.length(2)
    });

    it('should have one form', () => {
        expect(wrapper.find('form')).to.have.length(1);
    })

    it('it should have one input', () => {
        expect(wrapper.find('input')).to.have.length(1);
    })

    it('should change state.focus on input focus', () => {
        input.simulate('focus');
        expect(wrapper.state().focus).equal(true);
        expect(wrapper.hasClass('search-form-active')).to.equal(true);
    });

    it('should change classname on input focus', () => {
        input.simulate('focus');
        expect(wrapper.state().focus).equal(true);
        expect(wrapper.hasClass('search-form-active')).to.equal(true);
    });

    it('should clear input on reset button click', () => {
        expect(wrapper.state().value).equal('');
        input.simulate('focus');
        expect(wrapper.state().focus).equal(true);
        input.simulate('change', { target: { value: 'test' } });
        expect(wrapper.state().value).to.equal('test');
        clearButton.simulate('click');
        expect(wrapper.state().value).equal('');
    });

});