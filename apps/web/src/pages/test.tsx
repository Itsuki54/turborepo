import Link from 'next/link';

const TestPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  );
};

export default TestPage;
