const searchForm = document.getElementById('search-form');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const selectedBranch = document.getElementById('branch-select').value;
  const keyword = document.getElementById('keyword').value.toLowerCase();

  // Replace this with your actual content data structure
  const content = {
    electronics: ["Microprocessors", "Circuits", "Communication Protocols"],
    automobile: ["Engines", "Vehicle Dynamics", "Automotive Electronics"],
    // ... other branches with content ...
  };

  let searchResults = [];
  if (selectedBranch && keyword) {
    searchResults = content[selectedBranch].filter(item => item.toLowerCase().includes(keyword));
  }

  resultsDiv.innerHTML = ""; // Clear previous results

  if (searchResults.length > 0) {
    const list = document.createElement('ul');
    searchResults.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result;
      list.appendChild(listItem);
    });
    resultsDiv.appendChild(list);
  } else {
    resultsDiv.textContent = "No results found.";
  }
});