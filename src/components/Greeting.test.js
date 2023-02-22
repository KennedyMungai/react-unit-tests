import { render, screen } from "@testing-library/react"
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
    })
})