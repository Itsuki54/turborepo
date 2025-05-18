import { client } from '@repo/api/src/lib/hono';
import { Button } from '@repo/ui/button';

const Home = async () => {
  const res = await client.api.$get();
  const data = await res.json();
  const text = data.text;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='font-bold text-6xl'>{text}</h1>
      <Button>ボタン</Button>
    </main>
  );
};

export default Home;
