import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/router';
import { AuthProvider, useAuth } from './hooks/useAuth';

const Router = () => {
  const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{
        login: auth.login,
        logout: auth.logout,
        auth: {
          token: auth.token,
        },
      }}
    />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
