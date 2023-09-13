import { useState } from "react";
import mockData from "../../mock_data.json";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter data based on the search query
    const filteredResults = mockData.filter((item) =>
      item.username.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filteredResults);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by username"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      {searchQuery.length === 0 ? (
        <p>Start by typing a username</p>
      ) : (
        <p>Found {filteredUsers.length} item(s)</p>
      )}

      <ul className="search-results">
        {searchQuery.length > 0 &&
          filteredUsers.map((user) => (
            <li key={user.id}>
              {user.username} is {user.age} years old!
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
