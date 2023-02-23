import { FormItem } from "formik-antd";
import styled from "styled-components";

export const FormFieldWrapper = styled.div`
  width: 100%;

  .input-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      margin-left: 5px;
    }
  }
`;

export const InputWrapper = styled(FormItem)`
  width: 100%;
`;

export const SelectWrapper = styled(FormItem)``;
