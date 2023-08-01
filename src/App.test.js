
import { screen,render } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import App from "./App";
import React from "react"



test('Render without errors',()=>{
    render(<App />)
})

test('the h1 test is exist',()=>{
    render(<App />)
    const element=screen.getByText(/Add New Animal/i);
    //expect(element).toBeInTheDocument()
    expect(element).toBeTruthy()
})