import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table from './Table'
//import Card from './Card'
import Form from './Form'
import Card1 from './Card1'
import CardU from './CardU'
import Deletecard from './Deletecard'

export default function Router() {
  return (
    <div>
<BrowserRouter>
        <Routes>
      
            <Route exact path='/Td'element={<Table />}/>
            {/* <Route exact path='/Card'element={<Card />}/> */}
            <Route exact path='/Card1'element={<Card1 />}/>
            <Route exact path='/CardU/:id'element={<CardU />}/>
            <Route exact path='/'element={<Form />}/>
            <Route exact path='/Deletecard'element={<Deletecard />}/>
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}