import { useState, useEffect } from "react";

function App() {
  // Define state variables to store data and loading status
  const [quotes, setQuotes] = useState([]);
  const [covidData, setCovidData] = useState({});
  const [randomUser, setRandomUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from the API endpoints when the component mounts
  useEffect(() => {
    // Function to fetch quotes data
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://quotable.io/quotes?page=1");
        const data = await response.json();
        setQuotes(data.results);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    // Function to fetch COVID-19 statistics data
    const fetchCovidData = async () => {
      try {
        const response = await fetch("https://covid19.mathdro.id/api");
        const data = await response.json();
        setCovidData(data);
      } catch (error) {
        console.error("Error fetching COVID-19 data:", error);
      }
    };

    // Function to fetch random users data
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data);
        setRandomUser(data.results);
      } catch (error) {
        console.error("Error fetching random users:", error);
      }
    };

    // Fetch data from all endpoints concurrently
    Promise.all([fetchQuotes(), fetchRandomUsers()])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="cover">
      <div>
        <h1>Quotes</h1>
        <ul>
          {quotes.map((quote) => (
            <li key={quote._id} style={{ padding: "5px" }}>
              {quote.content}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h1>Random Users</h1>

        {randomUser.map((user, index) => (
          <div key={index} className="random-user">
            <img
              src={user.picture.large}
              alt=""
              style={{ borderRadius: "999px" }}
            />

            <p>
              {user.name.title}. {user.name.first} {user.name.last}
            </p>
            <p>{user.dob.age} years old</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
