
// import { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import './App.css'
import RootNavs from './components/root-navs'
import { IoGameControllerSharp } from 'react-icons/io5';
// import type { GameModel } from './_models/game.model';
// import { fetchOptions } from './_helpers/fetch-option';

const navLinks = [
  {
    label: "Category",
    childern: [
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
  // {
  //   label: "Platform",
  //   children: [
  //     { label: "PC", path: "/platform/pc" },
  //     { label: "Browser", path: "/platform/browser" }
  //   ]
  // },
  // {
  //   label: "Sort-by",
  //   children: [
  //     { label: "Release-Date", path: "/sort-by/release-date" },
  //     { label: "Popularity", path: "/sort-by/popularity" },
  //     { label: "Alphabetical", path: "/sort-by/alphabetical" }
  //   ]
  // }
]


const App = () => {



  return (
    <div className='grid grid-cols-12'>
      <aside className='bg-gray-800 col-span-3 ml-6 rounded-2xl '>
        <nav>
          <div className='flex  justify-center gap-2 p-5 mb-5'>
            <span className='text-5xl text-white'><IoGameControllerSharp /></span>
            <h1 className='text-3xl font-medium text-center'>Quantum Play</h1>
          </div>
        </nav>

        {navLinks.map((val, i) => {
          return <div key={i} className='p-5'>
            <span className=' mb-2 block text-lg text-gray'>{val.label}</span>

            {val.childern.map((val2, i2) => {
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

      </aside>
      <main className='col-span-9'>
        <RootNavs />
      </main>
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