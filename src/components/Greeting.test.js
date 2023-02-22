import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"


test('A simple test to look for Hello World rendered out on screen', () =>
{
    // Arrange
    render(<Greeting />)

    // Act
    // Not on this file

    // Assert
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
})