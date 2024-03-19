import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home Page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
