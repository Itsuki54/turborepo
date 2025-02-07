import Link from 'next/link';

/**
 * This is the test page component.
 */
const TestPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  );
};

export default TestPage;
