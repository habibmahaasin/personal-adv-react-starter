import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/router';

const App = () => {
  const auth = { user: undefined };

  return <RouterProvider router={router} context={{ auth }} />;
};

export default App;
