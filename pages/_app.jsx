import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/home">상품 목록</Link> | <Link href="/login">장바구니</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
