import PrimaryBtn from "../components/primary-btn"


const Home = () => {

  return (
    <section>
      <div className="hero-bg   py-18 px-12 overflow-hidden rounded-2xl flex flex-col  justify-center items-center ">
        <div>
          <h1 className="md:text-5xl text-4xl font-semibold mb-4 ">Next-Gen Gaming, Zero Cost</h1>
          <p className="text-lg font-light mb-8 md:max-w-2xl">Experience cutting-edge graphics, intense gameplay, and endless fun — all without spending a dime.</p>
          <PrimaryBtn title="Explore now" />
        </div>
      </div>
    </section>

  )
}

export default Home

// <img src="/hero-img.jpg" alt="hero-img" className=" absolute  z-[1] inset-0 w-full h-full object-cover" />


