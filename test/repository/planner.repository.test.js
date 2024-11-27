import {
  retrieveGisRoute,
  retrieveJourneyDetail,
  retrieveLocationByName,
  retrieveTripSearchDoor2Door
} from "@/repository/planner.repository.js";

describe('RoutePlanner', () => {

  it('retrieveLocationByName', async () => {
    const param = {
      "input": "La Parrilla Moderna", // Nombre de la ubicación
      "withProducts": "1", // Devuelve los lugares con productos
      "type": "S", // Tipo de parada
      "maxNo": "" // Número máximo de paradas (desde el 1 al 1000)
    };

    const result =
      await retrieveLocationByName(param);

    expect(result).not.toBeNull();
  });

  it('retrieveTripSearchDoor2Door', async () => {
    const result =
      await retrieveTripSearchDoor2Door({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });

  it('retrieveGisRoute', async () => {
    const result =
      await retrieveGisRoute({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });

  it('retrieveJourneyDetail', async () => {
    const result =
      await retrieveJourneyDetail({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });
});
