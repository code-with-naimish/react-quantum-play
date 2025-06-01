
const Home = () => {

  return (
    <div className="custom-container">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5">

        <div className="md:col-span-9 md:pb-0 pb-[40%] relative  rounded-2xl overflow-hidden">
          <img className="w-full h-full absolute inset-0 object-cover" src="hero image.jpg" alt="hero image" />
        </div>

        <div className="md:col-span-3 h-full ">
          <div className="h-full bg-gray-800 backdrop-blur-[5px] rounded-2xl border border-white/30 p-5 flex items-center justify-center flex-col">
            <h1 className="text-4xl mb-6 font-bold  gradient-text">Quantum Play</h1>
            <p className="text-lg">Step into a mind-bending adventure where quantum mechanics rule the game. Manipulate time, teleport across dimensions, and outsmart your rivals in a puzzle-action experience unlike any other.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

