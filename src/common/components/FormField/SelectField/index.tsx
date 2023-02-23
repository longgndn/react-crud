import { FieldProps } from "@common/types";
import { Select } from "formik-antd";
import { FC } from "react";
import { FormFieldWrapper, SelectWrapper } from "../styled";

const { Option } = Select;

type Options = {
  value: any;
  label: string;
};

type IProps = {
  options: Options[];
  //   multiple?: boolean;
  //   tags?: boolean;
  loading?: boolean;
};

const SelectField: FC<FieldProps & IProps> = ({
  defaultValue,
  onChange,
  options,
  name,
  label = "",
}) => {
  return (
    <FormFieldWrapper>
      <SelectWrapper label={label} name={name}>
        <Select
          defaultValue={defaultValue}
          style={{ width: 120 }}
          onChange={onChange}
          name={name}
        >
          {options &&
            options.map((item) => {
              return (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              );
            })}
        </Select>
      </SelectWrapper>
    </FormFieldWrapper>
  );
};
export default SelectField;
