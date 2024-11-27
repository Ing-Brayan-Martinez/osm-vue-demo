import {describe, expect, it} from "@jest/globals";
import {location} from "@/repository/location.repository.js";

describe('Location', () => {

  it('location', async () => {
    const result =
      await location({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });
});
