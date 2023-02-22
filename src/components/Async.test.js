import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => 
{
    test('renders posts if request succeeds', () =>
    {
        // Arrange
        render(<Async />)

        // Act

        // Assert
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })
})