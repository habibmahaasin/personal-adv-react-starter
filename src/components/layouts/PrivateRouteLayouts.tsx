import { Outlet } from '@tanstack/react-router';

const PrivateLayout = () => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>Dashboard Layout</h2>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
