"use client"
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const navigate = (name) =>{
    router.push(name);
  }

  return (
    <main >
      <h1>Home Page</h1>

      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>

      <br />
      <br />

      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </main>
  )
}
