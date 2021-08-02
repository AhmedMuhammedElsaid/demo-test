import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/*
 *Factory function to create a ShallowWrapper for the App component
 * @function setup
 *@param {object} props - Component props specific to this setup
 *param {any } state - Initial state for setup
 *@returns {shallowWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

/*
 *return Shallow Wrapper containing Nods with the given test-att value
 * @param setup
 *@param {ShallowWrapper} Wrapper - Enzyme wrapper to search within
 *param {string } val - value of test-att attribute for search
 *@returns {ShallowWrapper}
 */
const findByTestAtt = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
test("renders the app without crashing", () => {
  // const wrapper = shallow(<App />);
  const wrapper = setup();
  // const appComponent = wrapper.find("[test-att=`test-container`]");
  const appComponent = findByTestAtt(wrapper, "test-container");
  expect(appComponent.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  // const button = wrapper.find("[test-att=`increment-button`]");
  const button = findByTestAtt(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

// test("render counter display", () => {
//   const wrapper = setup();
   // const button = wrapper.find("[test-att=`counter-display`]");
//   const counterDisplay = findByTestAtt(wrapper, "counter-display");
//   expect(counterDisplay.length).toBe(0);
// });

// test("counter start at 0", () => {
//   const wrapper = setup();
   // const button = wrapper.find("[test-att=`counter-display`]");
   // const counterDisplay = findByTestAtt(wrapper, "counter-display");
//   const initialCounterState=wrapper.state().counter

//   expect(initialCounterState).toBe('0');
// });

test("should increment the counter by 1 after clicking", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "increment-button");
  button.simulate("click");
  const counterDisplay = findByTestAtt(wrapper, "counter-display");
  expect(counterDisplay.text()).toEqual("1");
});
