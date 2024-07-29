'use server';

import { resend } from './config';
import VerificationContactMeEmail from './email/VerificationContactMeEmail';

type Props = {
  name: string;
  email: string;
  description: string;
};

const sendVerificationContactMeEmail = async ({
  name,
  email,
  description,
}: Props) => {
  const emailTemplate = VerificationContactMeEmail({
    name,
    email,
    description,
  });

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: '【WebCreator Ko】お問い合わせがありました',
      react: emailTemplate,
    });
  } catch (error) {
    console.error(error, name);
    throw Error();
  }
};

export default sendVerificationContactMeEmail;
