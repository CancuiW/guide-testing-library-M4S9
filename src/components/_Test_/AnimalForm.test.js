import AnimalForm from "../AnimalForm";
import React from "react";
import {render,screen, wait, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";

test('renders without errors',()=>{
    render(<AnimalForm />)
})

test('when user fills all fields and submits, species appears in list',async()=>{
    //----arrange:

    render(<AnimalForm />)
    //-----act:

    //find species input and enter the content
    const species='feline'
    const speciesInput=screen.getByLabelText(/species:/i)
    userEvent.type(speciesInput,species)
    //age
    const ageInput = screen.getByLabelText(/age:/i)
    userEvent.type(ageInput, '9')

    //note
    const noteInput = screen.getByLabelText(/notes:/i)
    userEvent.type(noteInput, 'I want')

    //submit
    const btn=screen.getByRole('button')
    userEvent.click(btn)

    //----assert:

    await waitFor(()=>{
        const feedBack=screen.queryByText(species)
        expect(feedBack).toBeInTheDocument()
    })


})