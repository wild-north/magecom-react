import React from 'react';
import { Footer } from './index';
import renderer from 'react-test-renderer';

it('Футер отображается корректно', () => {
    const tree = renderer.create(
        <Footer/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});