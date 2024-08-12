'use server';

import { getTranslations } from 'next-intl/server';
import { resend } from './config';
import VerificationContactEmail from './email/VerificationContactEmail';

type Props = {
  name: string;
  email: string;
};

const sendVerificationContactEmail = async ({ name, email }: Props) => {
  const t = await getTranslations('Contact');
  const title = t('confirm.title');
  const messageContent = t('confirm.message', { name });
  const emailTemplate = VerificationContactEmail({
    messageContent,
  });

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: title,
      react: emailTemplate,
    });
  } catch (error) {
    console.error(error, name);
    throw Error();
  }
};

export default sendVerificationContactEmail;
