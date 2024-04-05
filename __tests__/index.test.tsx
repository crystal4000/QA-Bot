// index.test.tsx

// Import necessary dependencies and modules for testing
import "@testing-library/jest-dom"; // Jest DOM extension
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // Testing utilities
import Home from "../src/pages/index"; // Component to be tested

// Test suite for Home Page
describe("Home Page", () => {
  // Test case to check if Q&A Bot component renders
  it("renders the Q&A Bot component", () => {
    // Render Home component
    render(<Home />);

    // Check if heading text is rendered
    const heading = screen.getByText("Q&A Bot");

    // Assert that heading is in the document
    expect(heading).toBeInTheDocument();
  });

  // Test case to check loading state behavior
  it('displays "Thinking..." text during loading', async () => {
    // Render Home component
    render(<Home />);

    // Get input field and ask button
    const input = screen.getByPlaceholderText("What do you want to know?");
    const button = screen.getByText("Ask");

    // Simulate user input and click on the Ask button
    fireEvent.change(input, { target: { value: "Test question" } });
    fireEvent.click(button);

    // Wait for the loading state to be true
    await waitFor(() => {
      expect(screen.getByText("Thinking...")).toBeInTheDocument();
    });
  });
});
