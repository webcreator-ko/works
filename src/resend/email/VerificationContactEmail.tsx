import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Row,
  Section,
  Text,
} from '@react-email/components';

type Props = {
  messageContent: string;
};

const VerificationContactEmail = ({ messageContent }: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Hr style={global.hr} />
          <Section style={message}>
            <Text dangerouslySetInnerHTML={{ __html: messageContent }} />
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Row>
              <Text style={global.heading}>
                <Link href="https://webcreator-ko.pro" style={global.link}>
                  WEBCREATOR KO
                </Link>
              </Text>
            </Row>
          </Section>
          <Hr style={{ ...global.hr, marginTop: '12px' }} />
          <Section style={paddingY}>
            <Row>
              <Text style={footer.text}>© WEBCREATOR KO 2024</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default VerificationContactEmail;

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
};

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
};

const paragraph = {
  margin: '0',
  lineHeight: '2',
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    letterSpacing: '-1px',
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000',
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
  link: {
    color: '#000',
  },
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '10px auto',
  width: '600px',
  maxWidth: '100%',
  border: '1px solid #E5E5E5',
};

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as React.CSSProperties;

const footer = {
  policy: {
    width: '166px',
    margin: 'auto',
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
  } as React.CSSProperties,
};
