import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Landing from "../components/Landing";

test('Should render the create quiz button', () => {
    // Need to wrap in browser router since the Landing component includes a link from react-router-dom
    render(<BrowserRouter><Landing/></BrowserRouter>)
    const button = screen.getByText('create quiz')
    expect(button).toBeInTheDocument()
})