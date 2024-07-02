"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search({ placeholder }) {
  const searchParams = new useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname;

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("q", e.target.value);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.searchBox}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
