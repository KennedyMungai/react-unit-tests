import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe('Greeting', () =>
{
    test('A simple test to look for Hello World rendered out on screen', () =>
    {
        // Arrange
        render(<Greeting />)

        // Act
        // Not on this file

        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false })
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('A simple test to check out the effectiveness of some text switching functionality of the app', () =>
    {
        //Arrange
        render(<Greeting />)

        // Act

        // Assert
        const dumbJokeElement = screen.getByText('insert dumb programming joke', {
            exact: false
        })
        expect(dumbJokeElement).toBeInTheDocument()
    })

    test('Rendered "Changed!" if the button was clicked', () => 
    {
        //Arrange
        render(<Greeting />)

        // Act
        const button = screen.getByRole('button')
        userEvent.click(button)

        // Assert
        const changedElement = screen.getByText('Changed', {
            exact: false
        })
        expect(changedElement).toBeInTheDocument()
    })

    test('tests the state of the rendering of one of the paragraphs inside the Greeting component', () =>
    {
        // Arrange
        render(<Greeting />)

        // Act
        const button = screen.getByRole('button')

        // Assert
        const paragraphElement = screen.getByText('Insert Dumb Programming Joke', { exact: false })
        expect(paragraphElement).not.toBeInTheDocument()
    })
})