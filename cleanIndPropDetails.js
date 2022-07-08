import fetch from "node-fetch";

var id = 4;

async function cleanData() {
    // id++;
    const response = await fetch(`https://key47-51636.firebaseio.com/Properties/${id}.json`, {
        method: "GET",
        mode: "cors",           
        cache: "force-cache",
        credentials: "same-origin",
    })
    .catch((error) => {
        console.error("Error:", error); // change to ","
        // cleanData();
    });  
    
    const data = await response.text();
    // if (data == null) {
    //     cleanData();
    // }
    const parseData = JSON.parse(data);
    const dataBase = parseData.records;

    const cleanJson = {};

////////////////////////////////////////////////////////////////
/////////////////// Property Grid Details //////////////////////
////////////////////////////////////////////////////////////////

    cleanJson.photo = dataBase[0].Photo.PropertyPhoto[0].PhotoURL;
    cleanJson.city = dataBase[0].Address.City;
    cleanJson.price = dataBase[0].Price;
    cleanJson.address = `${dataBase[0].Address.StreetNumber} ${dataBase[0].Address.StreetName}`
    cleanJson.bedroomsTotal = dataBase[0].Building.BedroomsTotal;
    cleanJson.bathroomsTotal = dataBase[0].Building.BathroomTotal;
    cleanJson.listingId = dataBase[0].ListingID;
 
    const db = `https://key47-51636.firebaseio.com/PropertyGrid/${id}.json`;
    const put = await fetch(db, {
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
    
    const filterOtherPhotos = dataBase[0].Photo.PropertyPhoto.map((photos) => photos.LargePhotoURL);
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
}

cleanData();
