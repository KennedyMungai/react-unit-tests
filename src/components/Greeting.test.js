import { render } from "@testing-library/react"
import Greeting from "./Greeting"


test('A simple test to look for Hello World rendered out on screen', () =>
{
    // Arrange
    render(<Greeting />)
})