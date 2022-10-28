import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Category from './Components/Category'
import {Container} from 'react-bootstrap'
import ItemsList from './Components/ItemsList'
import { items } from './Components/Data'
const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [itemsData,setItemsData] = useState(items)
const allCategory = ["الكل", ...new Set(items.map((i) => i.category))]
// filter by category
const filterByCat = (cat) =>{
    if(cat === "الكل"){
        setItemsData(items)
    }else{
        const newArr = items.filter((item) => item.category === cat)
        setItemsData(newArr)
    }
}
// filter by search Form
const filterBySearch = (word) =>{
    if(word !== ""){
        const arrSearch = items.filter((item) => item.title === word)
        setItemsData(arrSearch)
    }
}
  return (
    <div className='font color-body'>
        <NavBar filterBySearch={filterBySearch}/>
        <Container>
            <Header/>
            <Category filterByCat={filterByCat} allCategory={allCategory}/>
            <ItemsList itData = {itemsData}/>
        </Container>
    </div>
  )
}
export default App