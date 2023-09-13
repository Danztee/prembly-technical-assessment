import fs from "fs";

// Predefined list of names
const names = [
  "Daniel",
  "Segun",
  "Faith",
  "David",
  "Emma",
  "Matthew",
  "Adedayo",
  "Hannah",
  "Florence",
  "Jack",
];

// Function to select a random name from the list
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

// Function to generate mock user data
function generateMockUser() {
  const user = {
    id: Math.floor(Math.random() * 1000) + 1,
    username: getRandomName(),
    email: `${getRandomName().toLowerCase()}@example.com`,
    age: Math.floor(Math.random() * 43) + 18,
  };
  return user;
}

// Generate 100 mock user records
const mockData = [];
for (let i = 0; i < 100; i++) {
  mockData.push(generateMockUser());
}

// Convert data to JSON
const jsonData = JSON.stringify(mockData, null, 4);

// Save the data to a JSON file
fs.writeFile("mock_data.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error saving file:", err);
  } else {
    console.log(
      'Mock JSON data with readable names has been generated and saved to "mock_data.json".'
    );
  }
});
