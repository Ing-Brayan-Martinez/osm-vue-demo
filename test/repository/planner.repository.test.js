import {describe, expect, it} from "@jest/globals";
import {
  retrieveLocationByName,
  retrieveLocationByName2,
  retrieveLocationByName3
} from "@/repository/planner.repository.js";

describe('RoutePlanner', () => {

  it('retrieveLocationByName', async () => {
    const result =
      await retrieveLocationByName({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });

  it('retrieveLocationByName2', async () => {
    const result =
      await retrieveLocationByName2({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });

  it('retrieveLocationByName3', async () => {
    const result =
      await retrieveLocationByName3({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });
});
