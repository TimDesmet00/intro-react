import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './assets/sections/header'
import { Mainer} from './assets/sections/mainer'

export const App = () => {
  return(
    <div>
      <Header />
      <Mainer />
    </div>
  )
}
