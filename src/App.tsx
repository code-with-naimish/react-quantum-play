
import { NavLink } from 'react-router';
import './App.css'
import { IoGameControllerSharp } from 'react-icons/io5';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import RootNavs from './components/root-navs';
import { ToastContainer } from 'react-toastify';
// import type { GameModel } from './_models/game.model';
// import { fetchOptions } from './_helpers/fetch-option';

const navLinks: {
  label: string,
  children: { label: string, path: string }[]
}[] = [
    {
      label: "Category",
      children: [
        { label: "MMORPG", path: "/category/mmorpg" },
        { label: "Shooter", path: "/category/shooter" },
        { label: "Strategy", path: "/category/strategy" },
        { label: "MOBA", path: "/category/moba" },
        { label: "Racing", path: "/category/racing" },
        { label: "Sports", path: "/category/sports" },
        { label: "Social", path: "/category/social" },
        { label: "Sandbox", path: "/category/sandbox" },
        { label: "Open World", path: "/category/open-world" },
        { label: "Survival", path: "/category/survival" },
        { label: "PvP", path: "/category/pvp" },
        { label: "PvE", path: "/category/pve" },
        { label: "Pixel", path: "/category/pixel" },
        { label: "Voxel", path: "/category/voxel" },
        { label: "Zombie", path: "/category/zombie" },
        { label: "Turn-Based", path: "/category/turn-based" },
        { label: "First-Person", path: "/category/first-person" },
        { label: "Third-Person", path: "/category/third-person" },
        { label: "Top-Down", path: "/category/top-down" },
        { label: "Tank", path: "/category/tank" },
        { label: "Space", path: "/category/space" },
        { label: "Sailing", path: "/category/sailing" },
        { label: "Side-Scroller", path: "/category/side-scroller" },
        { label: "Superhero", path: "/category/superhero" },
        { label: "Permadeath", path: "/category/permadeath" },
        { label: "Card", path: "/category/card" },
        { label: "Battle Royale", path: "/category/battle-royale" },
        { label: "MMO", path: "/category/mmo" },
        { label: "MMOFPS", path: "/category/mmofps" },
        { label: "MMOTPS", path: "/category/mmotps" },
        { label: "3D", path: "/category/3d" },
        { label: "2D", path: "/category/2d" },
        { label: "Anime", path: "/category/anime" },
        { label: "Fantasy", path: "/category/fantasy" },
        { label: "Sci-Fi", path: "/category/sci-fi" },
        { label: "Fighting", path: "/category/fighting" },
        { label: "Action RPG", path: "/category/action-rpg" },
        { label: "Action", path: "/category/action" },
        { label: "Military", path: "/category/military" },
        { label: "Martial Arts", path: "/category/martial-arts" },
        { label: "Flight", path: "/category/flight" },
        { label: "Low Spec", path: "/category/low-spec" },
        { label: "Tower Defense", path: "/category/tower-defense" },
        { label: "Horror", path: "/category/horror" },
        { label: "MMORTS", path: "/category/mmorts" }
      ]
    },
    {
      label: "Platform",
      children: [
        { label: "PC", path: "/platform/pc" },
        { label: "Browser", path: "/platform/browser" }
      ]
    },

    {
      label: "Sort-by",
      children: [
        { label: "Release-Date", path: "/sort-by/release-date" },
        { label: "Popularity", path: "/sort-by/popularity" },
        { label: "Alphabetical", path: "/sort-by/alphabetical" }
      ]
    }
  ]


const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleAside = () => {
    setShowSidebar(prev => !prev)
  }

  const closeAside = () => {
    setShowSidebar(false)
  }



  return (
    <div className=' relative flex min-h-screen'>
      <aside className={`z-[60] ${showSidebar ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'} transition-all duration-300 w-64 fixed inset-y-0 flex flex-col `}>
        <button onClick={closeAside} className='text-lg absolute top-2 right-2 md:hidden block'>
          <MdOutlineClose />
        </button>

        <div className=' py-3  flex items-center justify-center gap-1 bg-gray-800 border-b '>
          <span className='text-4xl text-black bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center'><IoGameControllerSharp /></span>
          <h1 className='text-2xl font-bold text-center'>Quantum Play</h1>

        </div>

        <nav className=' flex-1 overflow-y-auto bg-gray-800 ' >
          {navLinks.map((val, i) => {
            return <div key={i} className='p-5'>
              <span className=' mb-2 block text-base text-gray'>{val.label}</span>

              {val.children.map((val2, i2) => {
                return <NavLink
                  key={i2}
                  to={{
                    pathname: val2.path
                  }}
                  className={({ isActive }) =>
                    isActive ? "rounded-2xl font-medium px-4 py-3 bg-gradient-to-tl from-indigo-500 to-fuchsia-500 block" : "font-medium block px-4 py-3 "
                  }
                >
                  {val2.label}
                </NavLink>
              })}
            </div>
          })}
        </nav>
      </aside>

      <header className="left-0 md:left-64 transition-all duration-300 flex  justify-between items-center gap-6 px-4 py-3.5 bg-gray-800 border-l  fixed top-0  right-0">
        <div className='md:hidden flex items-center gap-4'>
          <button onClick={toggleAside} className='flex-none cursor-pointer flex items-center   text-xl justify-center w-10 h-10 rounded-lg  bg-blue-500/10 text-blue-500'><RiMenu4Fill /></button>

        </div>
        <h1 className="text-xl text-primary font-medium hidden md:block">Welcome!
        </h1>
        <a href="https://github.com/code-with-naimish" target='_blank' className='flex items-center   text-xl justify-center w-10 h-10 rounded-full  border border-gray-200'>
          <FaGithub /></a>
      </header>

      <main className='md:ml-64 flex-1 mt-[69px] p-6 overflow-x-auto'>
        <RootNavs />
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  )
}

export default App

// const [loading, setLoading] = useState<boolean>(false);
// const [items, setItems] = useState<GameModel[]>([]);


// const getGames = async () => {
//   setLoading(true)
//   try {
//     const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", fetchOptions)
//     const data = await response.json()
//     console.log(data)
//     setItems(data)

//   } catch (error) {
//     console.log(error)
//   } finally {
//     setLoading(false)
//   }
// }

// useEffect(() => {
//   getGames()
// }, [])