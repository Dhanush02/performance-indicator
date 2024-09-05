import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import TechnicalServices from './static-dashboard-2-theme1/TechnicalServices.jsx';

const router = createBrowserRouter([
  {
    path: "/technical services report",
    element: <App/>
  },
  {
    path: "",
    element: <TechnicalServices/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
