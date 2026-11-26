import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
const { emailFrom, emailFromDomain, labelSubject } = await import("@/lib/email");
const { SITE } = await import("@/config/site");

afterEach(() => {
  delete process.env.EMAIL_FROM;
  delete process.env.EMAIL_LABEL;
  delete process.env.VERCEL_ENV;
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
});

describe("sender address", () => {
  it("adds the brand as display name to a bare address", () => {
    process.env.EMAIL_FROM = "hello@commonthreaddonors.com";
    expect(emailFrom()).toBe(`${SITE.brand} <hello@commonthreaddonors.com>`);
    expect(emailFromDomain()).toBe("commonthreaddonors.com");
  });
  it("uses the brand as display name (only the address comes from EMAIL_FROM)", () => {
    process.env.EMAIL_FROM = "Preview <team@mail.commonthreaddonors.com>";
    expect(emailFrom()).toBe(`${SITE.brand} <team@mail.commonthreaddonors.com>`);
    expect(emailFromDomain()).toBe("mail.commonthreaddonors.com");
  });
  it("marks emails from the preview site with PREVIEW (sender and subject)", () => {
    process.env.EMAIL_FROM = "hello@example.com";
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.example.com";
    expect(emailFrom()).toMatch(/^.+ PREVIEW <hello@example\.com>$/);
    expect(labelSubject("New egg pre-screen: Jane D.")).toBe(
      "[PREVIEW] New egg pre-screen: Jane D.",
    );
  });
  it("marks Vercel preview deployments, and EMAIL_LABEL overrides", () => {
    process.env.VERCEL_ENV = "preview";
    expect(labelSubject("Hi")).toBe("[PREVIEW] Hi");
    process.env.EMAIL_LABEL = "STAGING";
    expect(labelSubject("Hi")).toBe("[STAGING] Hi");
  });
  it("uses the Vercel project's own domain when the site address isn't set", () => {
    process.env.VERCEL_ENV = "production";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "preview.example.com";
    expect(labelSubject("Hi")).toBe("[PREVIEW] Hi");
  });
  it("leaves the real site's emails unlabelled", () => {
    process.env.EMAIL_FROM = "hello@example.com";
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.example.com";
    process.env.VERCEL_ENV = "production";
    expect(emailFrom()).not.toContain("PREVIEW");
    expect(labelSubject("Hi")).toBe("Hi");
  });
  it("falls back to the Resend test sender", () => {
    expect(emailFrom()).toContain("onboarding@resend.dev");
  });
});
