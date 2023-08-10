import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextAndReducerApp } from './ContextAndReducer/ContextAndReducerApp.tsx';
import { ZustandApp } from './Zustand/ZustandApp.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/context-and-reducer",
    element: <ContextAndReducerApp />,
  },
  {
    path: "/zustand",
    element: <ZustandApp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
