import {
  Font,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { IVerificationEmailProps } from '@/types'

const VerificationEmail = ({ username, otp }: IVerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>One Time Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your one time verification code: {otp}</Preview>
      <Section>
        <Row>
          <Text>{otp}</Text>
        </Row>
      </Section>
    </Html>
  )
}

export default VerificationEmail
