import React from 'react'
import AddTask from '../../components/home/AddTask'
import ListTask from '../../components/home/ListTask'

const Home = () => {
  return (
    <div className="container h-screen max-w-screen-xl px-5 mt-28">
       <div className="flex-wrap justify-center md:flex">
            <AddTask />
            <ListTask/>
       </div>
    </div>
  )
}

export default Home