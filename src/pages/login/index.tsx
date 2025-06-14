import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 gap-4'>
      <h1>Example Public Routes</h1>
      <button
        className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
