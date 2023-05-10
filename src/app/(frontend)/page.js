import Link from 'next/link'
export default function Home() {
  return (
    <main className='main-home'>
      <ul>
        <li>
          <Link href={'/product'}>Product Page</Link>
        </li>
        <li>
          <Link href={'/login'}>Login Page</Link>
        </li>
      </ul>
    </main>
  )
}
