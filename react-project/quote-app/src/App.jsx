import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You learn more from failure than from success.", author: "Anonymous" },
  { text: "If you are working on something that you really care about, you don’t have to be pushed.", author: "Steve Jobs" },
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Random Quote Generator</h2>
      <div className="card p-4 mt-4">
        <h4>"{quote.text}"</h4>
        <p>- {quote.author}</p>
        <button className="btn btn-primary mt-3" onClick={generateQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
