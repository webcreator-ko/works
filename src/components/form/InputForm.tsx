import { Skeleton } from '@nextui-org/react';
import inputFormStyles from './inputForm.module.scss';

type Props = {
  name: string;
  type?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  loadingClassName?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({
  name,
  type = 'text',
  defaultValue,
  value,
  placeholder,
  maxLength = 50,
  loadingClassName,
  isLoading,
  isRequired = false,
  isDisabled = false,
  className,
  onChange,
}: Props) => {
  if (isLoading) {
    return (
      <Skeleton
        className={`${loadingClassName} ${inputFormStyles.loading} ${className}`}
      />
    );
  }

  return (
    <input
      name={name}
      type={type}
      maxLength={maxLength}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      className={`${inputFormStyles.wrap} ${className}`}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

export default InputForm;
