
import './App.css'
import Logo from './components/main-layout/logo'
import SideNav from './components/main-layout/side-nav'
import RootNavs from './components/root-navs'

const App = () => {
  return (
    <div className='bg-slate-200 p-8 '>
      <div className='grid md:grid-cols-13 grid-cols-1 rounded-xl overflow-hidden  bg-black text-white h-[calc(100dvh-64px)]'>

        <aside className='md:col-span-3 flex flex-col overflow-hidden'>
          <Logo />
          <div className='bg-pink-500 flex-1 overflow-y-auto overflow-x-hidden'>
            <SideNav />
          </div>
        </aside>

        <div className='md:col-span-10 flex flex-col overflow-hidden bg-yellow-800'>
          <header className='bg-blue-500'>Header</header>
          <main className='bg-yellow-500 flex-1 overflow-y-auto overflow-x-hidden'>
            <RootNavs />
          </main>
          <footer className='bg-blue-500'>
            dfnvirojv
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App