import { client } from '@repo/api/src/lib/hono';
import { Card } from '@repo/ui/card';

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Templates',
    href: 'https://turbo.build/repo/docs/getting-started/from-example',
    description: 'Choose from over 15 examples and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description:
      'Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
];

export default function Page({
  text,
}: {
  text: string;
}): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-6xl">{text}</h1>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card ref={href} key={title} title={title}>
            {description}
          </Card>
        ))}
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
