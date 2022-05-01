import React, { ReactNode } from 'react'
import {Header,Footer} from './'

type Props = {
  children:ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
