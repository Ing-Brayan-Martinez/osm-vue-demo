import {
  retrieveGisRoute,
  retrieveJourneyDetail,
  retrieveLocationByName,
  retrieveTripSearchDoor2Door
} from "@/repository/planner.repository.js";

describe('RoutePlanner', () => {

  it('retrieveLocationByName', async () => {
    const param = {
      "input": "La Parrilla Moderna",
      "withProducts": "1",
      "type": "S",
      "maxNo": ""
    };

    const result =
      await retrieveLocationByName(param);

    console.log(result);

    expect(result).not.toBeNull();
    console.log("Test Passed !!!");
  });

  it('retrieveTripSearchDoor2Door', async () => {
    const param = {
      "originCoordLong": "-74.119018",
      "originCoordLat": "4.687623",
      "destCoordLong": "-74.06546",
      "destCoordLat": "4.643881",
      "withFreq": "0",
      "originWalk": "1,0,10000",
      "destWalk": "1,0,10000",
      "time": "08:00",
    };

    const result =
      await retrieveTripSearchDoor2Door(param);

    console.log(result);

    expect(result).not.toBeNull();
    console.log("Test Passed !!!");
  });

  it('retrieveGisRoute', async () => {
    const param = {
      "ctx": "H|1|W$A=1@O=Ricaurte B - 2 ó 5@L=61601@a=128@$A=1@O=Ricaurte A - 2 ó 5@L=73814@a=128@$202411121738$202411121744$$$1$$$$$$|%23VE%232%23CF%23100%23CA%234%23CM%230%23SICT%230%23AM%2311534385%23AM2%230%23AT0AN%23ba%23%23RT%230%23",
      "poly": "1",
      "polyEnc": "N"
    };

    const result =
      await retrieveGisRoute(param);

    console.log(result);

    expect(result).not.toBeNull();
    console.log("Test Passed !!!");
  });

  it('retrieveJourneyDetail', async () => {
    const param = {
      "id": "2|%23VN%231%23ST%231731648995%23PI%230%23ZI%234084%23TA%230%23DA%23151124%231S%2358007%231T%231027%23LS%2359004%23LT%231238%23PU%231%23RT%231%23CA%23PBL%23ZE%23K315%23ZB%23Bus K315%23PC%238%23FR%2358007%23FT%231027%23TO%2359004%23TT%231238%23",
      "poly": "1",
      "polyEnc": "N",
    };

    const result =
      await retrieveJourneyDetail(param);

    console.log(result);

    expect(result).not.toBeNull();
    console.log("Test Passed !!!");
  });
});
