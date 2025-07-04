
import { FaGithub } from 'react-icons/fa'
import './App.css'
import Logo from './components/main-layout/logo'
import SideNav from './components/main-layout/side-nav'
import RootNavs from './components/root-navs'

const App = () => {
  return (
    <div className='bg-slate-200 p-8 '>
      <div className='grid md:grid-cols-13 grid-cols-1 rounded-xl overflow-hidden  bg-black text-white h-[calc(100dvh-64px)]'>

        <aside className='md:col-span-3 flex flex-col overflow-hidden border-r border-purple-500/20'>
          <Logo />
          <div className=' flex-1 overflow-y-auto overflow-x-hidden'>
            <SideNav />
          </div>
        </aside>

        <div className='md:col-span-10 flex flex-col overflow-hidden'>
          <header className='border-b  border-purple-500/20 px-6 py-3 flex justify-between items-center gap-6'>
            <h1 className='gradient-text text-2xl font-semibold'>Welcome</h1>
            <a href="https://github.com/code-with-naimish" target='_blank' className='flex items-center flex-none  text-xl justify-center w-10 h-10 rounded-full  border border-purple-500/20'>
              <FaGithub /></a>
          </header>
          <main className=' flex-1 overflow-y-auto overflow-x-hidden p-5'>
            <RootNavs />
          </main>
          <footer className='border-t  border-purple-500/20'>
            dfnvirojv
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App