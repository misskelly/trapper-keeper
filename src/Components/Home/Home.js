import React from 'react'
import NotesContainer from '../../Containers/NotesContainer/NotesContainer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <main className='home'>
        <header className='header'>
          <h1>Trapper Keeper</h1>
        </header>
          <Link
            to='/new-note'
            className='new-note-link'>
            <button
              className='new-note-btn'>
              New Note
            </button>
          </Link>
          <NotesContainer />
      </main>
    );
  }

  export default Home;