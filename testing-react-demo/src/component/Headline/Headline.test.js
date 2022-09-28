import { shallow} from 'enzyme'
import Headline from './Headline'
import { findByTestAtrr, checkProps } from '../../../utils'

const setUp = ((props={}) => {
 const component = shallow(<Headline {...props} />)
 return component
})


describe('Headline component', () => {

    describe("Check proptypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = { 
                header: "Test header",
                desc: " Test Desc",
                temArr: [{
                    fName: "test",
                    lName: "test",
                    email: "test@email.com",
                    age: 23,
                    online: true
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })
    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
        const props = { 
            header: 'Test Header',
            desc: "Test Desc"
        };
            wrapper = setUp(props)
        })
        it("Should render without error", () => {
            const component =  findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it("Should render a H1", () => {
            const h1 = findByTestAtrr(wrapper, 'header')
            expect(h1.length).toBe(1);
        })

        it("should render a description", () => {
            const desc = findByTestAtrr(wrapper, 'desc')
            expect(desc.length).toBe(1);
        })
    })

    describe("Have NO props", () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should NOT render', () =>{
            const component = findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })

    })
})