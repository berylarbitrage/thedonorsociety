import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
const { emailFrom, emailFromDomain } = await import("@/lib/email");

afterEach(() => {
  delete process.env.EMAIL_FROM;
});

describe("sender address", () => {
  it("adds the brand as display name to a bare address", () => {
    process.env.EMAIL_FROM = "hello@thedonorsociety.com";
    expect(emailFrom()).toBe("The Donor Society <hello@thedonorsociety.com>");
    expect(emailFromDomain()).toBe("thedonorsociety.com");
  });
  it("keeps an explicit display name", () => {
    process.env.EMAIL_FROM = "TDS Team <team@mail.thedonorsociety.com>";
    expect(emailFrom()).toBe("TDS Team <team@mail.thedonorsociety.com>");
    expect(emailFromDomain()).toBe("mail.thedonorsociety.com");
  });
  it("falls back to the Resend test sender", () => {
    expect(emailFrom()).toContain("onboarding@resend.dev");
  });
});
