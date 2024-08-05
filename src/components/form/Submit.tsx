import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '@/components/common/Button';
import submitStyles from './submit.module.scss';

type Props = {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isDisabled?: boolean;
  className?: string;
  name?: string;
  onClickHandler?: VoidFunction;
};

const Submit = ({
  isLoading,
  setLoading,
  isDisabled = false,
  className,
  name = 'Submit',
  onClickHandler,
}: Props) => {
  const status = useFormStatus();

  useEffect(() => {
    if (status.pending) {
      setLoading(true);
    }
  }, [status.pending]);

  if (isLoading) {
    return (
      <Button
        className={`${submitStyles.wrap} ${className}`}
        type="submit"
        isDisabled={true}
        onClickHandler={onClickHandler}
      >
        {name}
      </Button>
    );
  }

  return (
    <Button
      className={`${submitStyles.wrap} ${className}`}
      type="submit"
      isDisabled={isDisabled}
      onClickHandler={onClickHandler}
    >
      {name}
    </Button>
  );
};

export default Submit;
