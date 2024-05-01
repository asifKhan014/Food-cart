import React from 'react'
import Header from './_components/Header'

const Provider = ({children}) => {
  return (
    <div className='px-10 mb-10 md:px-20 relative'>
      <Header/>  
      {children}
    </div>
  )
}

export default Provider
