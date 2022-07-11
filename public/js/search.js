// HTML Targeting Variables
var searchKey = document.getElementById('searchText');

// Function for searching Prodcuts
function searchProducts() {
  // Get Input Value
  var searchInputVal = document.getElementById('searchText').value.trim();
  var queryString = '/search/' + searchInputVal;

  // Go to next page
  location.assign(queryString);
}

// Listen for Enter Key to be pressed
searchKey.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchProducts();
  }
});

// // API CALL
// // Test API Call
// const getProducts = async () => {
//   console.log('GETPRODUCTS CALLED ----');
//   const apiURL = 'http://localhost:3001/api/search/';

//   try {
//     const data = await fetch(apiURL + 'NZXT')
//     console.log(data.json())
//   } catch (err) {
//     console.log(err)
//   }
// }

// getProducts();
