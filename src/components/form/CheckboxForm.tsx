import { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '@nextui-org/react';
import checkboxStyles from './checkbox.module.scss';
import { CheckedIdType } from '@/types/checkedIdType';

type Props = {
  id: string;
  title: string;
  isSelected: boolean;
  onValueChange: Dispatch<SetStateAction<boolean>>;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    checkedId: CheckedIdType
  ) => void;
};

const CheckboxForm = ({
  id,
  title,
  isSelected,
  onValueChange,
  onChange,
}: Props) => {
  return (
    <Checkbox
      name={id}
      color="secondary"
      classNames={{
        base: checkboxStyles.checkboxWrap,
      }}
      isSelected={isSelected}
      onValueChange={onValueChange}
      onChange={onChange ? (e) => onChange(e, { id, title }) : onChange}
    >
      {title}
    </Checkbox>
  );
};

export default CheckboxForm;
