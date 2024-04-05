// app/ThemeRegistry.tsx
"use client"; // Assume some configuration or module related directive

// Import necessary dependencies
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { theme } from "../theme/theme"; // Importing custom theme

// Define ThemeRegistry component
export default function ThemeRegistry({
  children, // Props containing child components
}: {
  children: React.ReactNode; // Define children prop type
}) {
  // Initialize state for cache and flush function using React.useState
  const [{ cache, flush }] = React.useState(() => {
    // Define options for cache creation
    const options = { key: "mui" };

    // Create cache with provided options
    const cache = createCache(options);
    cache.compat = true;

    // Override insert method to track inserted styles
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    // Define flush function to clear inserted styles
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    // Return cache and flush function
    return { cache, flush };
  });

  // Trigger useServerInsertedHTML hook to handle server-inserted HTML
  useServerInsertedHTML(() => {
    // Get names of inserted styles and flush them
    const names = flush();

    // If no styles were inserted, return null
    if (names.length === 0) {
      return null;
    }

    // Concatenate inserted styles
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }

    // Return a style tag with concatenated styles
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  // Render CacheProvider, ThemeProvider, CssBaseline, and children components
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
