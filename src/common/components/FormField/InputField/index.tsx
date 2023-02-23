import { FC, memo } from "react";
import { Input } from "formik-antd";

import { InputWrapper, FormFieldWrapper } from "../styled";
import { FieldProps } from "@common/types";

type IProps = {
  prefixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  withButton?: JSX.Element;
};

const InputField: FC<FieldProps & IProps> = ({
  name,
  placeholder = "入力してください",
  label = "",
  suffixIcon,
  prefixIcon,
  className = "",
  required = false,
  disabled = false,
  error,
  onChange,
  setFieldValue,
  withButton,
}) => {
  return (
    <FormFieldWrapper className={`${className} input`}>
      <InputWrapper label={label} name={name} required={required}>
        <div className="input-button">
          <Input
            className="input-container"
            name={name}
            onChange={onChange}
            onBlur={(e) => {
              setFieldValue && setFieldValue(name, e.target.value.trim());
            }}
            placeholder={placeholder}
            disabled={disabled}
            {...(prefixIcon && {
              prefix: prefixIcon,
            })}
            suffix={suffixIcon ? suffixIcon : <span />}
            autoComplete="off"
          />
          {withButton}
        </div>
        {error && <p className="error-message">{error}</p>}
      </InputWrapper>
    </FormFieldWrapper>
  );
};

export default memo(InputField);
