'use client';
import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import InputForm from '@/components/form/InputForm';
import Submit from '@/components/form/Submit';
import TextareaForm from '@/components/form/TextareaForm';
import { initialState } from '@/lib/form';
import { zodSchema } from '@/lib/zod';
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
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

    if (isInvalid) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [formData]);

  const [isReCAPTCHAToken, setReCAPTCHAToken] = useState('');

  const action = postFormData.bind(null, isReCAPTCHAToken);
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    (async () => {
      if (!state.status) return;

      if (recaptchaRef.current) {
        onErrorRecaptcha();
      }

      if (state.status != 200) {
        window.alert(state.message);
        setLoading(false);
        return;
      }

      window.alert('感谢您的询问。\n请允许我们一些时间来回复您。');
      setLoading(false);
    })();
  }, [state]);

  const onChangeRecaptcha = (token: string | null) => {
    if (token) {
      setReCAPTCHAToken(token);
    }
  };
  const onErrorRecaptcha = () => {
    if (recaptchaRef.current) {
      // ReCAPTCHA リセット
      recaptchaRef.current.reset();
      setReCAPTCHAToken('');
    }
  };

  return (
    <form action={formAction} className={pageStyles.wrap}>
      <dl>
        <dt>Name</dt>
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
        <dt>Email</dt>
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
        <dt>Contents</dt>
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
      <div className={pageStyles.reCAPTCHAWrap}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA!}
          theme="dark"
          ref={recaptchaRef}
          onChange={onChangeRecaptcha}
          onExpired={onErrorRecaptcha}
          onError={onErrorRecaptcha}
        />
      </div>
      <Submit
        isLoading={isLoading}
        isDisabled={isInvalid || !isReCAPTCHAToken}
        setLoading={setLoading}
      />
    </form>
  );
}
