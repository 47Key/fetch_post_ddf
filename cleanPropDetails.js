import fetch from "node-fetch";

var id = 4;

async function cleanData() {
    id++;
    const response = await fetch(`https://key47-51636.firebaseio.com/Properties/${id}.json`, {
        method: "GET",
        mode: "cors",           
        cache: "force-cache",
        credentials: "same-origin",
    })
    .catch((error) => {
        console.error("Error:", error),
        cleanData();
    });  
    
    const data = await response.text();
    if (data == null) {
        cleanData();
    }
    const parseData = JSON.parse(data);
    const dataBase = parseData.records;

    const cleanJson = {};

    cleanJson.photo = dataBase[0].Photo.PropertyPhoto[0].PhotoURL;
    cleanJson.city = dataBase[0].Address.City;
    cleanJson.price = dataBase[0].Price;
    cleanJson.streetNumber = dataBase[0].Address.StreetNumber;
    cleanJson.streetName = dataBase[0].Address.StreetName;
    cleanJson.bedroomsTotal = dataBase[0].Building.BedroomsTotal;
    cleanJson.bathroomsTotal = dataBase[0].Building.BathroomTotal;
    cleanJson.listingId = dataBase[0].ListingID
    console.log(cleanJson);

    const db = `https://key47-51636.firebaseio.com/PropertyGrid/${id}.json`;
    const put = await fetch(db, {
        method: "PUT",
        body: cleanJson,
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Success:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });
    console.log(put);
    return cleanData();
}

cleanData();