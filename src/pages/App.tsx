import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Explore from './Explore'
import Home from './Home'
import SignUp from './SignUp'

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="explore" element={<Explore />} />
          {
              // <Route path="teams" element={<Teams />}>
              //   <Route path=":teamId" element={<Team />} />
              //   <Route path="new" element={<NewTeamForm />} />
              //   <Route index element={<LeagueStandings />} />
              // </Route>
            }
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
