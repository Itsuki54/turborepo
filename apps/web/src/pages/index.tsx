import { client } from '@repo/api/src/lib/hono';
import { Button } from '@repo/ui/button';

/**
 * Page component that displays a heading and a button.
 *
 * @param text - The text to display in the heading.
 */
const Page = ({
  text,
}: {
  text: string;
}) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='font-bold text-6xl'>{text}</h1>
      <Button onClick={() => console.log('test')}>Button</Button>
    </main>
  );
};

/**
 * Fetches data from the server to be used as props.
 *
 * @returns The props for the component.
 */
export const getServerSideProps = async () => {
  const res = await client.api.$get('/');

  const data = await res.json();

  const text = data.text;
  return {
    props: {
      text,
    },
  };
};

export default Page;
