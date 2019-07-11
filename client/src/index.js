import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import { CourseProvider, } from "./providers/CourseProvider";
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <CourseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CourseProvider>
  </AuthProvider>,
  document.getElementById('root')
);