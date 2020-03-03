import React from 'react';
import { NavLink, Routes, Route
 } from 'react-router-dom';
import Movies from "./pages/Movies"
import Todo from "./pages/Todo"
import './index.css'
export default function App() {
  return (
    <div id='app' className='bg-gray-300 h-screen pt-8'>
      <div className='max-w-sm mx-auto'>
        <header className='pb-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight'>
            React Query + MirageJS
          </h1>
          <NavLink
            to='/'
            className='pb-1 mr-4'
            activeClassName='border-b-2 border-gray-700'
          >
            Movies Example
          </NavLink>
          <NavLink
            to='/todo'
            className='pb-1 mr-4'
            activeClassName='border-b-2 border-gray-700'
          >
            Todo Example
          </NavLink>
          <a
            className='pb-1'
            href='https://github.com/sw-yx/react-query-miragejs-demo'
          >
            Source
          </a>
        </header>

        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}
