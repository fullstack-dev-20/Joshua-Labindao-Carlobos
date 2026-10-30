import { describe, expect, it } from "vitest";
import { mailto } from "@/lib/site";

describe("mailto", () => {
  it("builds an encoded mailto link", () => {
    const href = mailto({ subject: "Call request: Friday", body: "Hi & thanks\nLine 2" });
    expect(href).toBe(
      "mailto:joshualabcarlos@gmail.com?subject=Call%20request%3A%20Friday&body=Hi%20%26%20thanks%0ALine%202",
    );
  });

  it("omits the query when empty", () => {
    expect(mailto()).toBe("mailto:joshualabcarlos@gmail.com");
  });
});
