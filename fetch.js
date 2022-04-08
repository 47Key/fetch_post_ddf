import fetch from "node-fetch";

const url = "https://us-central1-key47-51636.cloudfunctions.net/app/login";
const url2 = "https://us-central1-key47-51636.cloudfunctions.net/app/";
const db = "https://key47-51636.firebaseio.com/PropertyID.json";

async function fetchDdf() {
    const login = await fetch(url);
    const response = await fetch(url2);
    const data = await response.text();
    const push = await fetch(db, {
        method: "PUT",
        body: JSON.parse(JSON.stringify(data)),
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Success:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });
}

fetchDdf();