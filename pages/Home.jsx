import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import requests from '@/keyjs/Request'
import Row from './components/Row'
import { AuthContextProvider } from './context/AuthContext'


const Home = () => {
  return (
    <>
       <AuthContextProvider>
        <Navbar/>
        <Main/>
        <Row rowID ='1' title ='Up coming' fetchURL={requests.requestUpcoming}/>
        <Row rowID ='2' title ='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID ='3' title ='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID ='4' title ='TopRated' fetchURL={requests.requestTopRated}/>
        <Row rowID ='5' title ='Horror' fetchURL={requests.requestHorror}/>
        </AuthContextProvider>
        
    </>
  )
}

export default Home