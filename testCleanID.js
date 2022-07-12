import fetch from "node-fetch";



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////// TEST FILE FOR MAPPING PROPERTY ID'S TO DB///////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////




const testJson = {
    "replyCode": 0,
    "replyText": "Operation successful",
    "statusMessage": "OperationSuccessful",
    "extra": {},
    "records": [
      {
        "_XmlAttributes": {
          "ID": "23684776",
          "LastUpdated": "Sat, 20 Nov 2021 00:49:45 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24581708",
          "LastUpdated": "Thu, 23 Jun 2022 17:44:42 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333671",
          "LastUpdated": "Tue, 31 May 2022 16:14:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24427898",
          "LastUpdated": "Thu, 07 Jul 2022 20:50:25 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333659",
          "LastUpdated": "Fri, 29 Apr 2022 13:26:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009203",
          "LastUpdated": "Mon, 07 Feb 2022 19:49:50 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009202",
          "LastUpdated": "Mon, 04 Apr 2022 15:59:42 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24642144",
          "LastUpdated": "Tue, 12 Jul 2022 00:27:27 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24247717",
          "LastUpdated": "Fri, 08 Apr 2022 13:46:17 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333627",
          "LastUpdated": "Wed, 08 Jun 2022 22:49:48 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333610",
          "LastUpdated": "Fri, 29 Apr 2022 13:26:18 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333600",
          "LastUpdated": "Sun, 29 May 2022 15:37:24 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009150",
          "LastUpdated": "Mon, 07 Feb 2022 18:43:11 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24075950",
          "LastUpdated": "Mon, 13 Jun 2022 16:21:13 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23684688",
          "LastUpdated": "Thu, 07 Apr 2022 19:36:49 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23684687",
          "LastUpdated": "Thu, 07 Apr 2022 19:36:49 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23360237",
          "LastUpdated": "Fri, 17 Dec 2021 17:33:28 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333579",
          "LastUpdated": "Fri, 24 Jun 2022 16:22:30 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333578",
          "LastUpdated": "Wed, 08 Jun 2022 18:48:26 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23612130",
          "LastUpdated": "Thu, 30 Jun 2022 16:29:54 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23403409",
          "LastUpdated": "Mon, 05 Jul 2021 21:39:13 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24139567",
          "LastUpdated": "Mon, 14 Mar 2022 17:41:41 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009110",
          "LastUpdated": "Mon, 07 Feb 2022 18:32:44 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333555",
          "LastUpdated": "Tue, 10 May 2022 13:25:48 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23035758",
          "LastUpdated": "Tue, 05 Apr 2022 22:00:54 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23035750",
          "LastUpdated": "Wed, 15 Jun 2022 23:03:16 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24645324",
          "LastUpdated": "Sat, 09 Jul 2022 20:38:40 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333528",
          "LastUpdated": "Sat, 18 Jun 2022 22:47:47 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009069",
          "LastUpdated": "Thu, 07 Jul 2022 14:52:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333510",
          "LastUpdated": "Thu, 30 Jun 2022 12:56:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333505",
          "LastUpdated": "Thu, 30 Jun 2022 12:56:19 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009052",
          "LastUpdated": "Mon, 06 Jun 2022 15:15:32 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24588068",
          "LastUpdated": "Sun, 10 Jul 2022 12:56:43 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333491",
          "LastUpdated": "Sun, 12 Jun 2022 22:16:56 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009037",
          "LastUpdated": "Mon, 07 Feb 2022 18:12:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009036",
          "LastUpdated": "Mon, 07 Feb 2022 18:12:58 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333484",
          "LastUpdated": "Thu, 12 May 2022 12:41:33 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333483",
          "LastUpdated": "Thu, 09 Jun 2022 01:01:18 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "18493395",
          "LastUpdated": "Fri, 20 May 2022 16:11:06 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "18493394",
          "LastUpdated": "Fri, 20 May 2022 16:11:04 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "18493393",
          "LastUpdated": "Fri, 20 May 2022 16:11:04 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "18493389",
          "LastUpdated": "Fri, 20 May 2022 16:26:28 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333464",
          "LastUpdated": "Wed, 06 Jul 2022 22:10:37 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24009007",
          "LastUpdated": "Mon, 07 Feb 2022 18:02:44 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008996",
          "LastUpdated": "Wed, 15 Jun 2022 14:52:34 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333443",
          "LastUpdated": "Mon, 06 Jun 2022 16:07:02 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333438",
          "LastUpdated": "Thu, 30 Jun 2022 22:54:57 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333431",
          "LastUpdated": "Tue, 12 Jul 2022 13:05:08 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24317694",
          "LastUpdated": "Tue, 21 Jun 2022 19:11:30 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333424",
          "LastUpdated": "Thu, 05 May 2022 14:41:57 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333423",
          "LastUpdated": "Fri, 29 Apr 2022 12:52:18 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23360073",
          "LastUpdated": "Wed, 23 Jun 2021 14:50:49 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333419",
          "LastUpdated": "Fri, 03 Jun 2022 13:25:54 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24616695",
          "LastUpdated": "Sun, 03 Jul 2022 06:41:24 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333417",
          "LastUpdated": "Sun, 29 May 2022 13:36:21 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24152289",
          "LastUpdated": "Thu, 28 Apr 2022 02:49:33 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333413",
          "LastUpdated": "Tue, 05 Jul 2022 15:29:48 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008961",
          "LastUpdated": "Thu, 07 Jul 2022 14:52:19 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008957",
          "LastUpdated": "Fri, 20 May 2022 19:42:19 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008940",
          "LastUpdated": "Wed, 29 Jun 2022 21:56:54 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008936",
          "LastUpdated": "Mon, 30 May 2022 18:57:27 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24584886",
          "LastUpdated": "Sun, 03 Jul 2022 21:19:35 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333379",
          "LastUpdated": "Mon, 09 May 2022 12:39:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24537173",
          "LastUpdated": "Tue, 14 Jun 2022 23:53:11 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24629418",
          "LastUpdated": "Sat, 09 Jul 2022 21:19:43 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24651684",
          "LastUpdated": "Tue, 12 Jul 2022 05:59:30 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23955075",
          "LastUpdated": "Fri, 18 Mar 2022 16:33:26 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333363",
          "LastUpdated": "Fri, 29 Apr 2022 12:36:52 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333359",
          "LastUpdated": "Thu, 09 Jun 2022 19:37:03 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333358",
          "LastUpdated": "Sun, 08 May 2022 23:38:41 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24328804",
          "LastUpdated": "Thu, 30 Jun 2022 16:21:37 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23360009",
          "LastUpdated": "Thu, 07 Jul 2022 18:29:41 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333355",
          "LastUpdated": "Tue, 31 May 2022 21:36:12 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333354",
          "LastUpdated": "Wed, 15 Jun 2022 03:46:25 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24578524",
          "LastUpdated": "Wed, 22 Jun 2022 22:55:56 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008902",
          "LastUpdated": "Wed, 04 May 2022 18:39:29 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333339",
          "LastUpdated": "Tue, 28 Jun 2022 17:53:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333330",
          "LastUpdated": "Thu, 02 Jun 2022 05:20:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333329",
          "LastUpdated": "Thu, 09 Jun 2022 16:17:09 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24642141",
          "LastUpdated": "Tue, 12 Jul 2022 01:37:36 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333318",
          "LastUpdated": "Fri, 20 May 2022 19:08:55 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333316",
          "LastUpdated": "Thu, 23 Jun 2022 15:41:11 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333315",
          "LastUpdated": "Fri, 24 Jun 2022 00:25:16 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333314",
          "LastUpdated": "Sat, 09 Jul 2022 06:53:39 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333303",
          "LastUpdated": "Tue, 28 Jun 2022 19:07:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23986883",
          "LastUpdated": "Tue, 14 Jun 2022 15:44:55 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24145713",
          "LastUpdated": "Mon, 06 Jun 2022 22:33:06 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333287",
          "LastUpdated": "Tue, 12 Jul 2022 14:29:57 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008836",
          "LastUpdated": "Wed, 04 May 2022 21:43:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008835",
          "LastUpdated": "Wed, 04 May 2022 21:42:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008834",
          "LastUpdated": "Wed, 04 May 2022 21:42:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008833",
          "LastUpdated": "Wed, 04 May 2022 21:22:58 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333277",
          "LastUpdated": "Fri, 29 Apr 2022 05:38:28 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333276",
          "LastUpdated": "Sun, 01 May 2022 03:40:58 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24145003",
          "LastUpdated": "Mon, 02 May 2022 17:50:26 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333270",
          "LastUpdated": "Fri, 08 Jul 2022 21:35:56 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24571740",
          "LastUpdated": "Thu, 07 Jul 2022 16:54:15 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333268",
          "LastUpdated": "Fri, 29 Apr 2022 05:38:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008818",
          "LastUpdated": "Wed, 15 Jun 2022 05:35:39 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333265",
          "LastUpdated": "Tue, 28 Jun 2022 23:36:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333259",
          "LastUpdated": "Tue, 28 Jun 2022 17:15:30 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24277659",
          "LastUpdated": "Fri, 22 Apr 2022 13:19:14 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24464012",
          "LastUpdated": "Fri, 27 May 2022 21:27:26 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24578523",
          "LastUpdated": "Wed, 22 Jun 2022 22:55:55 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24584526",
          "LastUpdated": "Mon, 27 Jun 2022 13:04:24 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008790",
          "LastUpdated": "Mon, 30 May 2022 18:57:18 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "22342002",
          "LastUpdated": "Fri, 04 Mar 2022 15:11:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333233",
          "LastUpdated": "Fri, 29 Apr 2022 23:26:06 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008783",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008782",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008781",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:19 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24642140",
          "LastUpdated": "Fri, 08 Jul 2022 19:37:37 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008774",
          "LastUpdated": "Fri, 03 Jun 2022 20:23:54 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008773",
          "LastUpdated": "Tue, 24 May 2022 18:50:33 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333221",
          "LastUpdated": "Fri, 29 Apr 2022 04:55:30 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333220",
          "LastUpdated": "Fri, 29 Apr 2022 04:54:46 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333219",
          "LastUpdated": "Fri, 29 Apr 2022 04:52:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008762",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008761",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008759",
          "LastUpdated": "Mon, 20 Jun 2022 21:09:20 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333202",
          "LastUpdated": "Fri, 20 May 2022 18:35:28 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "22710953",
          "LastUpdated": "Fri, 31 Dec 2021 16:51:17 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24311330",
          "LastUpdated": "Sun, 05 Jun 2022 21:23:25 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24635778",
          "LastUpdated": "Thu, 07 Jul 2022 17:41:17 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "22710945",
          "LastUpdated": "Mon, 11 Jan 2021 17:20:59 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23821477",
          "LastUpdated": "Fri, 12 Nov 2021 22:37:09 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23973988",
          "LastUpdated": "Mon, 25 Apr 2022 17:11:19 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24622884",
          "LastUpdated": "Wed, 06 Jul 2022 02:47:03 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008705",
          "LastUpdated": "Mon, 07 Feb 2022 17:06:49 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24578522",
          "LastUpdated": "Mon, 11 Jul 2022 13:01:44 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23684244",
          "LastUpdated": "Sat, 28 May 2022 21:46:50 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333139",
          "LastUpdated": "Wed, 08 Jun 2022 03:37:02 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333138",
          "LastUpdated": "Fri, 17 Jun 2022 21:37:27 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333134",
          "LastUpdated": "Thu, 23 Jun 2022 12:36:00 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008670",
          "LastUpdated": "Sat, 30 Apr 2022 05:37:47 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333108",
          "LastUpdated": "Sat, 02 Jul 2022 23:26:41 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24333105",
          "LastUpdated": "Tue, 05 Jul 2022 21:52:02 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "23684206",
          "LastUpdated": "Wed, 29 Jun 2022 22:40:13 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24104573",
          "LastUpdated": "Mon, 11 Jul 2022 20:31:31 GMT"
        }
      },
      {
        "_XmlAttributes": {
          "ID": "24008650",
          "LastUpdated": "Fri, 03 Jun 2022 13:25:15 GMT"
        }
      }
    ]
  }

// const idUrl = "https://app-whfampdoga-uc.a.run.app/";
const db = "https://teamforcier-default-rtdb.firebaseio.com/Test.json";

async function fetchDdf() {
    const response = testJson;
    const preData = await response.records.map(response => response._XmlAttributes.ID);
    // const data = preData.json();
    const push = await fetch(db, {
        method: "PUT",
        body: JSON.stringify(preData),
    })
    .then(response => response.json())
    .then(data => {
    console.log ("Fetch ID Success:", data);
    })
    .catch((error) => {
    console.error("Fetch ID Error:", error);
    });
}

fetchDdf();