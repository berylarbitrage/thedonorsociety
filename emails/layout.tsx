import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { DISCLAIMER, SITE } from "@/config/site";

export function EmailLayout({ preview, children }: { preview: string; children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: "#FAF8F3",
          fontFamily: "Jost, Helvetica, Arial, sans-serif",
          color: "#121212",
        }}
      >
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: "32px 24px" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#121212",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottom: "1px solid #A8834A",
              paddingBottom: 16,
            }}
          >
            {SITE.brand}
          </Text>
          <Section
            style={{
              backgroundColor: "#FDFCF9",
              border: "1px solid #DDD6C8",
              borderRadius: 0,
              padding: 24,
            }}
          >
            {children}
          </Section>
          <Hr style={{ borderColor: "#DDD6C8", margin: "24px 0" }} />
          <Text style={{ fontSize: 12, color: "#6B665E" }}>
            {SITE.brand} · {SITE.contactEmail} · {SITE.contactPhone}
            <br />
            {DISCLAIMER}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const button = {
  backgroundColor: "#121212",
  color: "#FAF8F3",
  borderRadius: 0,
  padding: "14px 28px",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontSize: 12,
  textDecoration: "none",
  display: "inline-block",
} as const;
