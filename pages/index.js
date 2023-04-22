// import Image from 'next/image'
import Head from "next/head"
import Navbar from "./components/Navbar"
import Home from "./Home.jsx"
// import Main from "./components/Main"
import { AuthContextProvider } from "./context/AuthContext"
export default function Home2() {
  return (
    <>
    <AuthContextProvider>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
    </Head>
      <Home/>
    </AuthContextProvider>
    </>
  )
}
