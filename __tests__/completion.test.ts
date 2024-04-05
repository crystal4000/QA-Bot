// completion.test.ts

// Import necessary dependencies and modules for testing
import "openai/shims/node"; // Import Node.js shims for OpenAI
import { NextApiRequest, NextApiResponse } from "next"; // Import Next.js API request and response types
import handler from "../src/pages/api/completion"; // Import API handler function

// Mock request object
const mockRequest = {
  method: "POST",
  query: {},
  cookies: {},
  body: { prompt: "Test prompt" }, // Mocked user input prompt
  env: {},
  draftMode: false,
} as NextApiRequest;

// Mock response object
const mockResponse = {
  status: jest.fn().mockReturnThis(), // Mock status function
  json: jest.fn().mockReturnThis(), // Mock json function
} as unknown as NextApiResponse;

// Test suite for API handler
describe("API Handler Tests", () => {
  // Test case for valid request
  it("should return response from OpenAI", async () => {
    // Call handler function with mock request and response
    await handler(mockRequest, mockResponse);

    // Assert that the API responds with 200 status
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // Assert that the API returns a JSON response
    expect(mockResponse.json).toHaveBeenCalled();

    // Add further assertions based on the expected behavior of your API handler
  });

  // Test case for invalid request method
  it("should handle invalid request method", async () => {
    // Mock request with invalid method
    const invalidMethodRequest = {
      ...mockRequest,
      method: "GET",
    } as NextApiRequest;

    // Call handler function with invalid method request and mock response
    await handler(invalidMethodRequest, mockResponse);

    // Assert that the API responds with 400 status for invalid method
    expect(mockResponse.status).toHaveBeenCalledWith(400);
  });
});
