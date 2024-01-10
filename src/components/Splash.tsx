const Splash =  ({children}: {children: React.ReactNode}) => {
  return (
    <div className="splash mt-16 bg-hazy">
      <div className="splash__container h-screen border-orange-600 border-2 items-center flex justify-center w-screen">
        <div className="splash__text">
          <h1 className="p-4">Kurt Wensmann</h1>
          <h2 className="p-4 mb-4">Full Stack Web Developer</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Splash
