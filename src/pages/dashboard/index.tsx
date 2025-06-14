import { useGetPostsQuery } from '@/services/posts';
import { increment } from '@/store/features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useGetPostsQuery();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <h2>Posts:</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post) => <p key={post.id}>{post.title}</p>)
      )}
    </div>
  );
}

export default App;
