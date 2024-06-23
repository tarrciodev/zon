import React from "react";
import { Html, Head, Body, Container, Heading, Section, Text, Preview } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

type ResetPasswordProps = {
    text: string;
    subject: string
};
export function ContactUsEmailBody({ text, subject }: ResetPasswordProps) {
    return (
        <Html lang='en' dir='ltr'>
            <Head />
            <Preview>{subject}</Preview>
            <Body>
                <Container>
                    <Heading>{subject}</Heading>
                    <Section>
                        <Text>
                            {text}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
