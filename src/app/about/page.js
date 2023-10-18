"use client"
import { useRouter } from 'next/navigation'
const About = () =>{
    const router = useRouter();
    return(
        <>
        <h1>About page</h1>
        <button onClick={()=>router.push('/')}>Go to Home Page</button>
        </>
    )
}

export default About ;