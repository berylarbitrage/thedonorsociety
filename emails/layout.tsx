import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { DISCLAIMER, SITE } from "@/config/site";

export function EmailLayout({ preview, children }: { preview: string; children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: "#F6EFE2",
          fontFamily: "Lora, Georgia, 'Times New Roman', serif",
          color: "#3C2A2A",
        }}
      >
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: "32px 24px" }}>
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Pacifico, 'Brush Script MT', cursive",
              color: "#C0485B",
              textAlign: "center",
              borderBottom: "2px dashed #8AA37F",
              paddingBottom: 14,
            }}
          >
            {SITE.brand}
          </Text>
          <Section
            style={{
              backgroundColor: "#FFFAF2",
              border: "2px dashed #8AA37F",
              borderRadius: 18,
              padding: 24,
            }}
          >
            {children}
          </Section>
          <Hr style={{ borderColor: "#DCCDB4", borderStyle: "dashed", margin: "24px 0" }} />
          <Text style={{ fontSize: 12, color: "#6B5450" }}>
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
  backgroundColor: "#C0485B",
  color: "#FFFFFF",
  borderRadius: 14,
  border: "2px dashed #F3C6CE",
  padding: "14px 28px",
  fontWeight: 700,
  fontFamily: "'Nunito Sans', Helvetica, Arial, sans-serif",
  fontSize: 15,
  textDecoration: "none",
  display: "inline-block",
} as const;
