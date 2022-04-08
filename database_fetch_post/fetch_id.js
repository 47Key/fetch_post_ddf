import fetch from "node-fetch";

var id = 1;
const url = "https://us-central1-key47-51636.cloudfunctions.net/app/login";
const db = "https://key47-51636.firebaseio.com/Properties.json";

async function login() {
    const login = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "force-cache",
        credentials: "include",
    });
    console.log(login);
    return search();
}

login();

async function search() {
    id++;
    const response = await fetch(`https://key47-51636.firebaseio.com/PropertyID/records/${id}/_XmlAttributes/ID.json`, {
        method: "GET",
        mode: "cors",           
        cache: "force-cache",
        credentials: "same-origin",
    })
    .catch((error) => {
        console.error("Error:", error),
        search();
    });  
    const data = await response.json();
    const searchId = await fetch(`https://us-central1-key47-51636.cloudfunctions.net/app/${data}`, {
        method: "GET",
        mode: "cors",           
        cache: "force-cache",
        credentials: "same-origin",
    })
    .catch((error) => {
        console.error("Error:", error),
        search();
    });
    const searchResponse = await searchId.text();
    const db = `https://key47-51636.firebaseio.com/Properties/${id}.json`;
    const put = await fetch(db, {
        method: "PUT",
        body: JSON.parse(JSON.stringify(searchResponse)),
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Success:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });
    console.log(put);
    return search();
}

search();
