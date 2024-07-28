'use client';

import { Select, Skeleton } from '@nextui-org/react';
import selectFormStyles from './selectForm.module.scss';

type Props = {
  label: string;
  name: string;
  children: JSX.Element[];
  items: Iterable<object>;
  defaultSelectedKey?: string;
  loadingClassName?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const SelectForm = ({
  label,
  name,
  children,
  items,
  defaultSelectedKey,
  loadingClassName,
  isLoading,
  isRequired = false,
  isDisabled = false,
  className,
}: Props) => {
  if (isLoading) {
    return (
      <Skeleton
        className={` ${loadingClassName} ${selectFormStyles.loading} ${className}`}
      />
    );
  }

  return (
    <Select
      items={items}
      label={label}
      name={name}
      defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : ''}
      isRequired={isRequired}
      isDisabled={isDisabled}
      className={className}
      classNames={{
        trigger: selectFormStyles.trigger,
        listboxWrapper: selectFormStyles.listBox,
      }}
    >
      {children}
    </Select>
  );
};

export default SelectForm;
