let jokeBtn = document.getElementById("joke-button");
jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const apiURL =
    " https://hindi-jokes-api.onrender.com/jokes?api_key=659b4e8805cbec716c6d0e2482c0";
  try {
    let response = await fetch(apiURL);
    // console.log(response)
    if (response.ok) {
      let jokeData = await response.json();
      displayJoke(jokeData);
      console.log(jokeData);
    } else {
      
    }
  } catch (e) {
    alert("Failed to fetch data");
    console.log("Data not found", e);
  }
}


function displayJoke(joke){
   let jokes= document.getElementById('jokeContent')

jokes.innerHTML = joke.jokeContent;


//    let punchline = document.getElementById('punchline')
//    pinchline.innerHTML =joke;

}