import type { LucideIcon } from "lucide-react";
import { LoginForm } from "@/components/forms/login-form";
import { PasswordLoginForm } from "@/components/forms/password-login-form";
import { SITE } from "@/config/site";

/** Standalone sign-in card (no public site header) for /admin and /catalog. */
export function LoginCard({
  icon: Icon,
  area,
  title,
  intro,
  next,
  error,
  wrongAccount,
  allowPassword = false,
  passwordArea = "admin",
}: {
  icon: LucideIcon;
  area: string;
  title: string;
  intro: string;
  next: string;
  error?: string;
  wrongAccount?: string | null;
  /** Show email + password sign-in first (staff), with the emailed link as a fallback. */
  allowPassword?: boolean;
  /** Where the password form goes after sign-in (see PasswordLoginForm). */
  passwordArea?: "admin" | "portal";
}) {
  return (
    <div className="bg-background flex min-h-dvh items-center justify-center px-4 py-16">
      <div className="fabric-card stitched w-full max-w-sm p-8 [--stitch:var(--thread)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-primary-soft text-primary flex size-10 items-center justify-center rounded-full">
            <Icon className="size-5" aria-hidden />
          </span>
          <div>
            <p className="font-script text-thread text-xl">{SITE.brand}</p>
            <p className="thread-label text-muted">{area}</p>
          </div>
        </div>
        <h1 className="text-2xl">{title}</h1>
        <p className="text-muted mt-1 mb-6 text-sm">{intro}</p>
        {error === "link" && (
          <p role="alert" className="bg-accent-soft mb-4 rounded-lg p-3 text-sm">
            That sign-in link is invalid or has expired. Please request a new one.
          </p>
        )}
        {wrongAccount && (
          <p role="alert" className="bg-accent-soft mb-4 rounded-lg p-3 text-sm">
            {wrongAccount}
          </p>
        )}
        {allowPassword ? (
          <>
            <PasswordLoginForm next={next} area={passwordArea} />
            <p className="text-muted my-5 text-center text-xs tracking-widest uppercase">
              or get a sign-in link by email
            </p>
            <LoginForm next={next} />
          </>
        ) : (
          <LoginForm next={next} />
        )}
      </div>
    </div>
  );
}
