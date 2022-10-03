import React from "react";
import { shallow } from 'enzyme'
import {findByTestAtrr, checkProps} from '../../../utils'
import Button from "./Button";

describe("Button Component tests", () => {
    describe("Checking prop-types", () => {
        it("It should not throw a warning", () => {
            const expectedProps = { 
                buttonText: "String",
                emitEvent: () => {}

            }
            const propsError = checkProps(Button, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })


    describe("It renders without error", () => {

        let wrapper;
        beforeEach(() => {
            const props = { 
                buttonText: "String",
                emitEvent: () => {}

            }
wrapper = shallow(<Button {...props} />)
        })

        it("Should render a button", () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })
    })
})