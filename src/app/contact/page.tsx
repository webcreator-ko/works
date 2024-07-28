'use client';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import InputForm from '@/components/form/InputForm';
import Submit from '@/components/form/Submit';
import TextareaForm from '@/components/form/TextareaForm';
import { initialState } from '@/libs/form';
import { zodSchema } from '@/libs/zod';
import { postFormData } from './action';
import pageStyles from './page.module.scss';
type inputType = 'name' | 'email';

export default function Page() {
  const [isLoading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(true);
  const [formData, setFormData] = useState({
    name: {
      text: '',
      isInvalid: true,
    },
    email: {
      text: '',
      isInvalid: true,
    },
    description: {
      text: '',
      isInvalid: true,
    },
  });

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: inputType
  ) => {
    const { value } = e.target;
    if (i === 'email') {
      try {
        zodSchema.parse({ email: value });
      } catch (_) {
        setFormData((e) => ({
          ...e,
          email: {
            text: value,
            isInvalid: true,
          },
        }));
        return;
      }
    }

    if (!value) {
      setFormData((e) => ({
        ...e,
        [i]: {
          text: '',
          isInvalid: true,
        },
      }));
      return;
    }

    setFormData((e) => ({
      ...e,
      [i]: {
        text: value,
        isInvalid: false,
      },
    }));
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    if (!value) {
      setFormData((e) => ({
        ...e,
        description: {
          text: '',
          isInvalid: true,
        },
      }));
      return;
    }

    setFormData((e) => ({
      ...e,
      description: {
        text: value,
        isInvalid: false,
      },
    }));
  };

  useEffect(() => {
    const isInvalid = Object.values(formData).some((field) => field.isInvalid);
    console.log('isInvalid', isInvalid);

    if (isInvalid) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [formData]);

  const [state, formAction] = useFormState(postFormData, initialState);

  useEffect(() => {
    (async () => {
      if (!state.status) return;

      if (state.status != 200) {
        window.alert(state.message);
        setLoading(false);
        return;
      }

      setLoading(false);
    })();
  }, [state]);

  return (
    <form action={formAction} className={pageStyles.wrap}>
      <dl>
        <dt>お名前</dt>
        <dd>
          <InputForm
            name="name"
            isRequired={true}
            isLoading={isLoading}
            onChange={(e) => onChangeInput(e, 'name')}
            value={formData.name.text}
            maxLength={30}
          />
        </dd>
      </dl>
      <dl>
        <dt>連絡先アドレス</dt>
        <dd>
          <InputForm
            name="email"
            type="email"
            isRequired={true}
            isLoading={isLoading}
            onChange={(e) => onChangeInput(e, 'email')}
            value={formData.email.text}
            maxLength={30}
          />
        </dd>
      </dl>
      <dl>
        <dt>お問い合わせ内容</dt>
        <dd>
          <TextareaForm
            name="description"
            isRequired={true}
            isLoading={isLoading}
            maxLength={30}
            onChange={onChangeTextarea}
            value={formData.description.text}
          />
        </dd>
      </dl>

      <Submit
        isLoading={isLoading}
        isDisabled={isInvalid}
        setLoading={setLoading}
      />
    </form>
  );
}
