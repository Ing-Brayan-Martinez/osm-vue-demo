import {describe, expect, it} from "@jest/globals";
import {login} from "@/repository/auth.repository.js";

describe('Planner', () => {

  it('login', async () => {
    const result =
      await login({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });
});
