import React, { useState, useMemo } from 'react';

const data = [
  { id: 1, name: "Alice", age: 21 },
  { id: 2, name: "Eve", age: 19 },
  { id: 3, name: "Hadassa", age: 26 },
  { id: 4, name: "Lenore", age: 23 },
  { id: 5, name: "Lucas", age: 27 },
  { id: 6, name: "Lucas Pedro", age: 24 },
  { id: 7, name: "Mateus", age: 24 },
  { id: 8, name: "Rubens", age: 23 },
  { id: 9, name: "Samuel", age: 17 },
  { id: 10, name: "Stevan", age: 7 },
];

export default function FilteredList() {
  const [filterOption, setFilterOption] = useState("all");
  const [sortOption, setSortOption] = useState("alphabeticalAsc");

  const filteredData = useMemo(() => {
    return data.filter(item => {
      if (filterOption === "over18") {
        return item.age > 18;
      } else if (filterOption === "under18") {
        return item.age <= 18;
      }
      return true;
    });
  }, [data, filterOption]);

  const sortedData = useMemo(() => {
    return filteredData.sort((a, b) => {
      if (sortOption === "alphabeticalAsc") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "alphabeticalDesc") {
        return b.name.localeCompare(a.name);
      } else if (sortOption === "ageAsc") {
        return a.age - b.age;
      } else if (sortOption === "ageDesc") {
        return b.age - a.age;
      }
    });
  }, [filteredData, sortOption]);

  return (
    <div>
      <h1>Filtered List</h1>

      <div>
        <label htmlFor="filterSelect">Filter:</label>
        <select id="filterSelect" value={filterOption} onChange={e => setFilterOption(e.target.value)}>
          <option value="all">All</option>
          <option value="over18">Over 18</option>
          <option value="under18">Under 18</option>
        </select>
      </div>

      <div>
        <label htmlFor="sortSelect">Sort by:</label>
        <select id="sortSelect" value={sortOption} onChange={e => setSortOption(e.target.value)}>
          <option value="alphabeticalAsc">Name (A-Z)</option>
          <option value="alphabeticalDesc">Name (Z-A)</option>
          <option value="ageAsc">Age (Low to High)</option>
          <option value="ageDesc">Age (High to Low)</option>
        </select>
      </div>

      <ul>
        {sortedData.map((item, index) => (
          <li key={item.id}>{item.name} - Age: {item.age}</li>
        ))}
      </ul>
    </div>
  );
};
