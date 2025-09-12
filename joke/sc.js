console.log("=== Random Joke Generator ===");

document.getElementById("jokeBtn").addEventListener("click", ()=> {

    let url = "https://official-joke-api.appspot.com/random_joke";

    fetch(url)

        .then(res => res.json())

        .then(data => {

            document.getElementById("jokeDisplay").innerHTML = ` 

                <h3>Here's a Joke for You!</h3>

                <p> ${data.setup}</p

                <p> ${data.punchline}</p>

            `;

        }



        )

        .catch(error => {

            console.error(error);

            document.getElementById("jokeDisplay").innerHTML = "Couldnot fetch a joke, try again!";

        });

});