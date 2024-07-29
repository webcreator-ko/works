'use server';

import { resend } from './config';
import VerificationContactEmail from './email/VerificationContactEmail';

type Props = {
  name: string;
  email: string;
};

const sendVerificationContactEmail = async ({ name, email }: Props) => {
  const emailTemplate = VerificationContactEmail({
    name,
  });

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: '【WebCreator Ko】お問い合わせ内容頂きありがとうございます。',
      react: emailTemplate,
    });
  } catch (error) {
    console.error(error, name);
    throw Error();
  }
};

export default sendVerificationContactEmail;
