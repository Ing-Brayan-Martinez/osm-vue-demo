import {login} from "@/repository/auth.repository.js";

describe('Auth', () => {

  it('login', async () => {
    const result =
      await login({username: 'test', password: 'test', group: 'test'});

    expect(result).not.toBeNull();
  });
});
