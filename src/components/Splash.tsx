const Splash =  ({children}: {children: React.ReactNode}) => {
  return (
    <div className="mt-0">
      <div className="splash__container h-screen items-center flex justify-center w-screen">
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
