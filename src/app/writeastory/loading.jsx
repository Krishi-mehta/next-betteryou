import React from 'react'

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-b-black"></div>
    {/* <h1>Loading...</h1> */}
</div>
  )
}

export default loading