import { Skeleton } from '@nextui-org/react';
import textAreaStyles from './textarea.module.scss';

type Props = {
  name: string;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaForm = ({
  name,
  maxLength = 300,
  defaultValue,
  value,
  isLoading,
  onChange,
  isRequired = false,
  isDisabled = false,
  className,
}: Props) => {
  if (isLoading) {
    return (
      <Skeleton
        className={`${textAreaStyles.loading} ${textAreaStyles.wrapInner} ${className}`}
      />
    );
  }
  return (
    <textarea
      name={name}
      className={`${textAreaStyles.wrap} ${className}`}
      maxLength={maxLength}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

export default TextareaForm;
