"use client"
import Link from 'next/link'




export default function Home() {

  return (
    <main>
      <h1>Fetch Data from Api in client Component</h1>
      <Link href="/productlist">Go to Product List</Link>
    </main>
  );
};


