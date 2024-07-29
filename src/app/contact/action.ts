'use server';

import sendVerificationContactEmail from '@/resend/sendVerificationContactEmail';
import sendVerificationContactMeEmail from '@/resend/sendVerificationContactMeEmail';

export async function postFormData(
  token: string,
  prevState: any,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const description = formData.get('description') as string;

  try {
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );
  } catch (e) {
    console.error(e);
    return {
      status: 401,
      message:
        'メール送信に失敗しました、再度各項目を記入のうえ送信を行ってください',
    };
  }

  try {
    // 相手に送信
    await sendVerificationContactEmail({
      name,
      email,
    });

    // 自分に送信
    await sendVerificationContactMeEmail({
      name,
      email,
      description,
    });
  } catch (e) {
    console.error(e);
    return {
      status: 401,
      message:
        'メール送信に失敗しました、再度各項目を記入のうえ送信を行ってください',
    };
  }

  return {
    status: 200,
    message: '',
  };
}
