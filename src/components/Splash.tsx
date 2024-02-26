import React, { ForwardedRef } from 'react'

const Splash =  React.forwardRef(({children}: {children: React.ReactNode}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="mt-0 text-walnutDark bg-woodgrain bg-cover bg-center w-full relative">
      <div className="splash__container h-screen items-center flex justify-center ">
        <div className="splash__text">
          <h1 className="p-4 font-bold mb-2 text-5xl xs:text-7xl">Kurt Wensmann</h1>
          <h2 className="mb-20 text-accent font-bold">Software Engineer</h2>
          {children}
        </div>
      </div>
    </div>
    

  )
})

export default Splash
