import React from 'react'
import Header from '../components/Header';
type Props = {
children?:React.ReactNode;
}

const LayOut = ({children}:Props) =>{
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
    {children}
    </main>
    </>
  )
}

export default LayOut