export type SvgProps = {
  strokeColor?: string;
  fill?: string;
  size?: number;
};

export type FieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
  error?: string;
  maxLength?: number;
  onChange?: (e?: any, value?: any) => void;
  setFieldValue?: (field: string, value: any) => void;
};

export type IProps = {
  visible: boolean;
  children: React.ReactNode;
  className?: string;
  width?: number;
  footer?: JSX.Element;
  loading?: boolean;
  onOk?: any;
  onCancel?: any;
};
