import { client } from '@repo/api/src/lib/hono';
import { Button } from '@repo/ui/button';

export default function Page({
  text,
}: {
  text: string;
}): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-6xl">{text}</h1>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Button className="lg:col-span-2">Button</Button>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await client.api.$get('/');
  const data = await res.json();
  const text = data.text;
  return {
    props: {
      text,
    },
  };
}
