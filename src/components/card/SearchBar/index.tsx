'use client';
import Image from 'next/image';
import React, { useState } from 'react';
const SearchBar = ({ className }: { className?: string }) => {
  const [results, setResults] = useState<JSON | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = async (searchTerm: string) => {
    const response = await fetch(`/api/search?term=${searchTerm}`);

    const result: JSON = await response.json();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <Image
        className="bg-transparent mr-3"
        src="/search.svg"
        alt="Search icon"
        width={20}
        height={20}
        priority
      />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
