import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          login({ token: '1234567890' });
          navigate({ to: '/dashboard' });
        }}
      >
        Click
      </button>
    </div>
  );
}
