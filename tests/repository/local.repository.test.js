import {describe, expect, it} from "vitest";
import {
  createConfigDefault,
  getConfig,
  isEmptyConfig,
  updateConfig
} from "@/repository/local.repository.js";

describe("Local", () => {

  it("createConfigDefault", async () => {
    const result =
      await createConfigDefault();

    expect(result).not.toBeNull();
  });

  it("isEmptyConfig", async () => {
    await createConfigDefault();

    const result = await isEmptyConfig();

    expect(result).toBeFalsy();
  });

  it("getConfig", async () => {
    await createConfigDefault();

    const result = await getConfig();

    expect(result).not.toBeNull();
  });

  it("updateConfig", async () => {
    await createConfigDefault();

    const result = await getConfig();

    result.token = "123";

    await updateConfig(result);

    expect(result).not.toBeNull();
  });
});
