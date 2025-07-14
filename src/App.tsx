
import { FaGithub } from 'react-icons/fa'
import './App.css'
import Logo from './components/main-layout/logo'
import SideNav from './components/main-layout/side-nav'
import RootNavs from './components/root-navs'
import { useState } from 'react'

const App = () => {
  const year = new Date().getFullYear();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleAside = () => {
    setShowSidebar(prev => !prev)
  }

  const closeAside = () => {
    setShowSidebar(false)
  }

  return (
    <div className='grid md:grid-cols-12 grid-cols-1   overflow-hidden  bg-black text-white h-screen'>

      <aside className={`md:col-span-2 flex flex-col overflow-hidden border-r border-purple-500/20
      md:h-auto h-screen md:overflow-y-hidden overflow-y-auto
         bg-black  z-50 md:static fixed md:bg-transparent md:z-auto transition-all
       ${showSidebar ? "-translate-x-full   " : "md:translate-x-0"}
        `}>
        <Logo />


        <div className=' flex-1 overflow-y-auto overflow-x-hidden'>
          <SideNav />
        </div>
      </aside>

      <div className='md:col-span-10 flex flex-col overflow-hidden'>
        <header onClick={toggleAside} className='border-b  border-purple-500/20 px-6 py-3 flex justify-between items-center gap-6'>
          <h1 className=' text-xl gradient-text font-semibold'>Welcome</h1>
          <a href="https://github.com/code-with-naimish" target='_blank' className='flex items-center flex-none  text-xl justify-center w-10 h-10 rounded-full  border border-purple-500/20'>
            <FaGithub /></a>
        </header>
        <main className=' flex-1 overflow-y-auto overflow-x-hidden p-5'>
          <RootNavs />
        </main>
        <footer className='border-t  border-purple-500/20 p-4 text-white/70 text-sm  text-center'>
          <p>&copy; {year} Designed & developed by <a className='text-white cursor-pointer hover:underline transition-all' href="https://github.com/code-with-naimish" target='_blank'>Naimish</a> with React.js Tailwind CSS & <a className='text-white cursor-pointer hover:underline transition-all' href="https://www.freetogame.com/api-doc" target='_blank'>FreeToGame API</a>  </p>
        </footer>
      </div>
    </div>

  )
}

export default App