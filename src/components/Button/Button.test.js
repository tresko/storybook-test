/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Components
import Button from './Button';

const test = describe('Button component', () => {
    it('should render Button with text', () => {
        const component = renderer.create(<Button text="test" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render Button with text and onClick handler', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Button text="test" onClick={onClickHandler} />);

        wrapper.simulate('click');
        expect(onClickHandler).toBeCalled();
    });
});