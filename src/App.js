import React from "react"
import img from "assets/logo.svg"

function App() {
  return (
    <div className="w-full mt-5 text-center">
      {/* Images */}
      <img src={img} className="spin w-[500px] mx-auto" alt="img" />

      {/* Category */}
      <p className="py-1 px-3 rounded-md bg-blue-100 text-center text-dark font-bold mx-auto mt-5 mb-8 w-fit">Public Template</p>

      {/* Content */}
      <h1 className="text-4xl font-extrabold text-white">React Redux</h1>
      <p className="text-white mt-2 font-normal text-sm">Lets use this template and change the world with your project</p>

      <h3 className="font-bold text-md text-white mt-10">Made with &hearts; from Ferdian</h3>
    </div>
  )
}

export default App;
