'use server';

export async function postFormData(
  token: string,
  prevState: any,
  formData: FormData
) {
  const name = formData.get('name');
  const email = formData.get('email');
  const description = formData.get('description');
  console.log(token);
  console.log(name, email, description);

  return {
    status: 200,
    message: '',
  };
}
