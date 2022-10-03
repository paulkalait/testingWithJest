import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import ListItem from "./ListItem";

describe("List Item Component", () => {

    describe("checking prop-types", () => {
        it("It should not throw a warning about our props", () => {
            const expectedProps = { 
                title: "String test",
                desc: "String test"

            }
              const propsError = checkProps(ListItem, expectedProps)
              expect(propsError).toBeUndefined();
        })
    })

    describe("It renders without error", () =>{
        let wrapper;
        beforeEach(() => {
            const props = { 
                title: "String test",
                desc: "String test"

            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("SHould render without error", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent")
            expect(component.length).toBe(1);
        })

        it("Should render a title", () => {
            const title = findByTestAtrr(wrapper, 'componentTitle')
            expect(title.length).toBe(1);

        })
        it("Should render a Desc", () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1);

        })
    })

    describe("When it should not render!", () => {
        let wrapper;
        beforeEach(() => {
            const props = { 
                desc: "String test"

            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("Component is not rendering", () => {
            const component = findByTestAtrr(wrapper, "listItemComponent")
            expect(component.length).toBe(0)
        })
    })

})