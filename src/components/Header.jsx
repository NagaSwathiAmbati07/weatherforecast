import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row gap-[2rem] sm:gap-[6rem] items-center sm:px-10 py-6">
      <h1 className="text-[39px] sm:text-3xl font-medium text-orange-500">
        Weather in your city
      </h1>
      <Search />
    </header>
  );
}

export default Header