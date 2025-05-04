import React from "react";
import { Input } from "./ui/input";

interface SearchProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ query, onQueryChange, placeholder }) => {
  return (
    <Input
      type="text"
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}
      placeholder={placeholder || "Buscar..."}
      className="bg-white border-gray-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-100 dark:focus:ring-black"
    />
  );
};

export default Search;
