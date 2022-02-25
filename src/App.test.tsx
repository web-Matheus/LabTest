import React from 'react';
import { render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App component",()=>{
  it("Should check elements in App",()=>{
    const{getByText}=render(<App/>)
    expect(getByText("matheus")).toBeInTheDocument()
    expect(getByText("gust")).toBeInTheDocument()
    expect(getByText("santos")).toBeInTheDocument()
  })

  it('should be able to add a new item on screen',()=>{
    const {getByText,debug,getByPlaceholderText}=render(<App/>)
    
    const inputElement = getByPlaceholderText("novo item")
    const addButton = getByText("addToList")

    debug()

    userEvent.click(addButton)
    userEvent.type(inputElement,"novo")
    expect(getByText("novo")).toBeInTheDocument()

    debug()
  })
})