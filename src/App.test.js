import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('renders button red', () => {
  render(<App />);
  const link=screen.getByRole("button")
  expect(link).toHaveStyle({"background-color":"red"});
  fireEvent.click(link);
  expect(link).toHaveStyle({"background-color":"blue"});
});




test("check checkbox",()=>{
  render(<App />);
  const testId=screen.getByTestId("html-check");
  const link=screen.getByRole("button")
  expect(link).toHaveStyle({"background-color":"red"});
  expect(testId).toBeChecked();
  fireEvent.click(testId);
  expect(testId).not.toBeChecked();
  expect(link).toHaveStyle({"background-color":"blue"});

});