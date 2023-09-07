// serch mode to determine serch button clicked
let serchMode = "none";

// dom elements for function --------------------------------------------------------

const myResultElement = document.getElementById("myResult");

const myfirstLetterInput = document.getElementById("firstLetterInput");
const myfirstLetterSearchButton = document.getElementById("firstLetterSearch");

myfirstLetterSearchButton.addEventListener("click", () => {
  serchMode = "firstLetterSearch";
  //console.info(myfirstLetterInput.value);
  getRecipiesByLetter(myfirstLetterInput.value);
});

const myNameInput = document.getElementById("nameInput");
const myNameSearchButton = document.getElementById("nameSearch");

myNameSearchButton.addEventListener("click", () => {
  serchMode = "nameSearch";
  console.info(myNameInput.value);
  getRecipiesByName(myNameInput.value);
});

const myIdInput = document.getElementById("idInput");
const myIdSearchButton = document.getElementById("idSearch");

myIdSearchButton.addEventListener("click", () => {
  serchMode = "idSearch";
  console.info(myIdInput.value);
  getRecipiesById(myIdInput.value);
});

//-------------------------------------------------------------------------------------

// fetch functions --------------------------------------------------------------------
// your code goes here

//Search by Name
function getRecipiesByName(myName) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${myName}`)
  .then((response) => response.json())
  .then((myData) => {
      setupResultView(myData);
    })
  .catch((error) => {
      console.error(error);
    });
}


//Search by letter

function getRecipiesByLetter(myText) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${myText}`)
  .then((response) => response.json())
  .then((myData) => {
      setupResultView(myData);
    })
  .catch((error) => {
      console.error(error);
    });
}
//Search by ID

function getRecipiesById(myId) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myId}`)
 .then((response) => response.json())
 .then((myData) => {
  //console.log(mealID);
  console.log(myData.meals);
 })
}

//53071

// view code --------------------------------------------------------------------------

function setupResultView(myData) {
  let myText = "";
  switch (serchMode) {
    case "firstLetterSearch":
      //console.log(myData);

      myData.meals.map((myMeal) => {
        myText += myMeal.strMeal + ", ";
      })

      myResultElement.textContent = myText;
      break;

      // do view stuff with the data here
      break;

    case "nameSearch":
      console.log(myData.meals);

      myData.meals.map((myMeal) => {
        myText += myMeal.strMeal + ", ";
      })

      myResultElement.textContent = myText;
      break;

    case "idSearch":
      console.log(myData);
      // do view stuff with the data here
      break;

    case "errorMessage":
      console.log(myData);
      // do view stuff with the error msg here
      break;

    default:
      console.warn("ooops no data to show from setupResultView");
      break;
  }
}
