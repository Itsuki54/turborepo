import Link from 'next/link';

const TestPage = () => {
  return (
    <div>
      <h1>ホーム</h1>
      <Link href='/'>トップに戻る</Link>
    </div>
  );
};

export default TestPage;
