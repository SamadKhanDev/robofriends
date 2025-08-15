// Basic React imports to build the UI
import React from 'react';
import ReactDOM from 'react-dom/client'; // Newer way to render React apps
import './index.css'; // Importing global styles
import App from './containers/App'; // Our custom component
import reportWebVitals from './reportWebVitals'; // Optional: for measuring performance
import 'tachyons'; // CSS framework for styling


// Create the React root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app into the HTML div with id="root"
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

// Used for performance monitoring (you can ignore this for now)
reportWebVitals();
