import {
  Html,
  Head,
  Preview,
  Heading,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your verification code</Preview>
      <Section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Heading as="h2">Hello {username},</Heading>
        <Text>
          Your One-Time Password (OTP) for verification is:
        </Text>
        <Text
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "2px",
            margin: "20px 0",
          }}
        >
          {otp}
        </Text>
        <Text>
          Please enter this code to complete your sign-up. This code will expire
          in 5 minutes.
        </Text>
        <Text>Thank you for using our service!</Text>
      </Section>
    </Html>
  );
}
