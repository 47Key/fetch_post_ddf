import fetch from "node-fetch";


////////////////////////////////////////////////////////////////
//////////////////// Login to RETS Server //////////////////////
////////////////////////////////////////////////////////////////

// Initial login to the RETS server to perform additional queries

const loginUrl = "https://us-central1-key47-51636.cloudfunctions.net/app/login";

async function login() {
    const login = await fetch(loginUrl, {
        method: "GET",
        mode: "cors",
        cache: "force-cache",
        credentials: "include",
    });
    console.log(login);
    return search();
}

login();


////////////////////////////////////////////////////////////////
///////////////////// Fetch Property ID's //////////////////////
////////////////////////////////////////////////////////////////

// Fetches all of the ID's of active MLS listings for that day

const idUrl = "https://us-central1-key47-51636.cloudfunctions.net/app/";
const db = "https://key47-51636.firebaseio.com/PropertyID.json";

async function fetchDdf() {
    const response = await fetch(idUrl);
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


////////////////////////////////////////////////////////////////
//////////////////// Fetch Property Details ////////////////////
////////////////////////////////////////////////////////////////

// Takes the ID's from the previous function, and fetches all of the data on that property

var id = 1;

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
    if (searchResponse == null) {
        search();
    }

    const parseData = JSON.parse(searchResponse);


////////////////////////////////////////////////////////////////
/////////////////// Property Grid Details //////////////////////
////////////////////////////////////////////////////////////////

// Initializing basic json for property grid, to minimize the amount of data needed to be rendered on the website
// Continuation of Search function, but split into 3 sections for better organization

    const dataBase = parseData.records;

    const cleanJson = {};

    cleanJson.photo = dataBase[0].Photo.PropertyPhoto[0].PhotoURL;
    cleanJson.city = dataBase[0].Address.City;
    cleanJson.price = dataBase[0].Price;
    cleanJson.address = `${dataBase[0].Address.StreetNumber} ${dataBase[0].Address.StreetName}`
    cleanJson.bedroomsTotal = dataBase[0].Building.BedroomsTotal;
    cleanJson.bathroomsTotal = dataBase[0].Building.BathroomTotal;
    cleanJson.listingId = dataBase[0].ListingID;

    const dbPartial = `https://key47-51636.firebaseio.com/PropertyGrid/${id}.json`;
    const put = await fetch(dbPartial, {
        method: "PUT",
        body: JSON.stringify(cleanJson),
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Success:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });


////////////////////////////////////////////////////////////////
///////////////// Individual Property Details //////////////////
////////////////////////////////////////////////////////////////

// Initializing more advanced JSON to provide more detailed information about a property once that particular property is selected
// Continuation of Search function, but split into 2 sections for better organization

    cleanJson.description = dataBase[0].PublicRemarks;
    cleanJson.buildingSqFt = dataBase[0].Building.TotalFinishedArea;
    cleanJson.propertyType = dataBase[0].PropertyType;
    cleanJson.buildingType = `${dataBase[0].Building.Type} ${dataBase[0].Building.ConstructionStyleAttachment}`;
    cleanJson.stories = dataBase[0].Building.StoriesTotal;
    cleanJson.title = dataBase[0].OwnershipType;
    cleanJson.landSize = dataBase[0].Land.SizeTotalText;
    cleanJson.buildDate = dataBase[0].Building.ConstructedDate;
    cleanJson.parkingType = `${dataBase[0].ParkingSpaces.Parking[0].Name} ${dataBase[0].ParkingSpaces.Parking[1].Name}`;
    cleanJson.latitude = dataBase[0].Address.Latitude;
    cleanJson.longitude = dataBase[0].Address.Longitude;
    cleanJson.appliances = dataBase[0].Building.Appliances;
    cleanJson.flooring = dataBase[0].Building.FlooringType;
    cleanJson.fireplace = dataBase[0].Building.FireplacePresent;
    cleanJson.exteriorFinish = dataBase[0].Building.ExteriorFinish;
    cleanJson.heatingType = `${dataBase[0].Building.HeatingType} ${dataBase[0].Building.HeatingFuel}`;
    cleanJson.coolingType = dataBase[0].Building.CoolingType;
    cleanJson.foundationType = dataBase[0].Building.FoundationType;
    cleanJson.features = dataBase[0].Features;
    cleanJson.pool = dataBase[0].PoolType;
    cleanJson.zoning = dataBase[0].ZoningDescription;
    cleanJson.mainPhoto = dataBase[0].Photo.PropertyPhoto[0].LargePhotoURL;

    const filterOtherPhotos = dataBase[0].Photo.PropertyPhoto.map((photos) => photos.LargePhotoURL); // filter LargePhotoUrl out of larger object, to minimize size of data rendered on the website
    cleanJson.otherPhotos = filterOtherPhotos;

    const dbFull = `https://key47-51636.firebaseio.com/IndividualProperty/${id}.json`;
    const putFull = await fetch(dbFull, {
        method: "PUT",
        body: JSON.stringify(cleanJson),
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Success:", data);
    })
    .catch((error) => {
    console.error("Error:", error);
    });


// //////// OLD ///////
//     const db = `https://key47-51636.firebaseio.com/Properties/${id}.json`;
//     const put = await fetch(db, {
//         method: "PUT",
//         body: JSON.parse(JSON.stringify(searchResponse)),
//     })
//     .then(response => response.json())
//     .then(data => {
//     console.log ("Success:", data);
//     })
//     .catch((error) => {
//     console.error("Error:", error);
//     });
//     console.log(put);
//     return search();
}

search();
