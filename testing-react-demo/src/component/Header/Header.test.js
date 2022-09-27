import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import { findByTestAtrr } from '../../../utils'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />)
    return component
}
describe("Header Component", () => {

    let component;

    // * before each will run before each test
    beforeEach(() => {
        component = setUp();
    })

    test('It should render withour errors', () => {
        // * creates a skeleton
        
        const wrapper = findByTestAtrr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    test("Should render a logo", () => {
          // * creates a skeleton
          const logo = findByTestAtrr(component, 'logoIMG')
          expect(logo.length).toBe(1)
    })
})
