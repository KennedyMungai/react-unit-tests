import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component ', () => 
{
    test('renders posts correctly', () =>
    {
        // Arrange
        render(<Async />)
    })
})