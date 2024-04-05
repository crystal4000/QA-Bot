// Import necessary dependencies
import Head from "next/head"; // For setting metadata in the head of the page
import { Box, Button, Container, Input, Typography } from "@mui/material"; // MUI components
import { useState } from "react"; // For managing component state
import { toast } from "react-hot-toast"; // For displaying toast notifications

// Define Home component
export default function Home() {
  // State variables
  const [prompt, setPrompt] = useState(""); // User input prompt
  const [response, setResponse] = useState(""); // Bot response
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    setLoading(true); // Set loading state to true
    setResponse(""); // Clear previous response

    try {
      // Send request to API endpoint for chat completion
      const response = await fetch("/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type header
        },
        body: JSON.stringify({ prompt }), // Convert prompt to JSON and send in request body
      });

      // Parse response JSON
      const data = await response.json();

      // Set bot response
      setResponse(data.response);
    } catch (error: any) {
      // Display error toast notification
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading state is set to false after response is received
    }
  };

  // Handle "Try Again" button click
  const handleTryAgain = () => {
    setResponse(""); // Clear previous response
    setPrompt(""); // Clear prompt input
  };

  // Render UI
  return (
    <>
      <Head>
        {/* Metadata */}
        <title>Q&A Bot</title>
        <meta name="description" content="A simple question and answer bot." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main content container */}
      <Container
        component="main"
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Inner box for form */}
        <Box
          sx={{
            width: "90%",
            maxWidth: "600px", // Adjust the max width according to your preference
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "4px 4px 10px 1px rgba(0,0,0,0.4)",
            px: 3,
            py: 5,
          }}
        >
          {/* Title */}
          <Typography
            component="h1"
            variant="h2"
            color="secondary"
            fontWeight="bold"
            sx={{ mb: 4, textAlign: "center" }}
          >
            Q&A Bot
          </Typography>
          {/* Form */}
          <form noValidate onSubmit={handleSubmit}>
            {/* Input field */}
            <Input
              sx={{
                width: "100%",
                backgroundColor: "white",
                mb: 3,
              }}
              type="text"
              color="secondary"
              placeholder="What do you want to know?"
              name="prompt"
              id="prompt"
              margin="dense"
              autoComplete="off"
              disabled={!!response || loading} // Disable input when response is received or loading
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)} // Update prompt state on input change
            />
            {/* Display response if available */}
            {response && (
              <Box sx={{ mt: 3 }}>
                <Typography component="h4" variant="body1" fontWeight="bold">
                  Response:
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ whiteSpace: "pre-line" }}
                >
                  {response}
                </Typography>
              </Box>
            )}
            {/* Render "Try Again" button if response available */}
            {response ? (
              <Button
                type="button"
                onClick={handleTryAgain}
                variant="contained"
                color="secondary"
                sx={{
                  mt: 3,
                  py: 1,
                  px: 3,
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                }}
              >
                Try again
              </Button>
            ) : (
              // Render "Ask" button if no response
              <Button
                type="submit"
                disabled={!!loading || prompt.length < 5} // Disable button if loading or prompt is too short
                variant="contained"
                color="secondary"
                sx={{
                  mt: 3,
                  py: 1,
                  px: 3,
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                }}
              >
                {/* Button label changes depending on loading state */}
                {loading ? "Thinking..." : "Ask"}
              </Button>
            )}
          </form>
        </Box>
      </Container>
    </>
  );
}
