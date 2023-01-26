import React from 'react';
import ReactDOM from'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
      id: "heading1",
      key: "heading1",
    },
    "I'm Having Fun Haha"
  );

  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
      key: "heading2",
    },
    "This is nesting elements under div through react"
  );

  const heading3 = React.createElement(
    "h3",
    {
      id: "heading3",
      key: "heading3",
    },
    "heading3"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
    heading3,
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);