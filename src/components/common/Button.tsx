import ReactLoading from 'react-loading';
import buttonStyles from './button.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  spinSize?: number;
  isSpin?: boolean;
  isDisabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClickHandler?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
};

const Button = ({
  children,
  className,
  spinSize = 15,
  isSpin = false,
  type = 'button',
  isDisabled = false,
  onClickHandler,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  if (isDisabled) {
    return (
      <button
        className={`${buttonStyles.default} ${buttonStyles.disabled} ${className}`}
        type={type}
        disabled={true}
      >
        {isSpin && (
          <ReactLoading
            type="spin"
            height={spinSize}
            width={spinSize}
            className={buttonStyles.loading}
          />
        )}
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${buttonStyles.default} ${className}`}
      onClick={onClickHandler}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
