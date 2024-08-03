import React, { useState } from 'react';
import './SearchPage.css';
import { FaSearch } from 'react-icons/fa';
import { urlFor, client } from '../../client';
import { NavLink } from 'react-router-dom';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [noresults, setNoresults] = useState(false);
  const [sanityResults, setSanityResults] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query) {
      alert('enter the item');
    } else {
      await fetchSanityData();
    }
  };

  const fetchSanityData = async () => {
    const results = await client.fetch(
      `*[_type == "search" && title match $query]{
        title,
        description,
        method,
        imgUrl
      }`,
      { query: `${query}*` }
    );
    // console.log(results);
    results.length === 0 ? setNoresults(true) : setNoresults(false);
    setSanityResults(results);
  };

  return (
    <>
      <div className="app__search">
        <form onSubmit={handleSubmit}>
          <div className="search-box ">
            <button type="submit" className="btn-search">
              <FaSearch />
            </button>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="input-search"
              placeholder="Type to Search..."
            />
          </div>
        </form>

        <div className="app__small">
          {noresults && (
            <>
              <h1 className="app__error">
                Sorry For The Inconvenience <br /> Please report The Missing
                Item In the Complaint Section <br />
                We Will Update It Soon
              </h1>
            </>
          )}
          {sanityResults.map((result, index) => (
            <div className="app_finally" key={index}>
              <div>
                <img
                  className="app__final-image"
                  src={urlFor(result.imgUrl)}
                  alt={result.title}
                  height={250}
                />
              </div>
              <div className="app__fin-cont">
                <h2>{result.title}</h2>
                <p>{result.description}</p>
                <br />
                <p>{result.method}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
