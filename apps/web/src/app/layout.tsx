import '@/styles/globals.css';
import '@repo/ui/styles.css';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang='ja'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
