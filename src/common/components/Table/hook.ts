export type ReceivedProps = {
  data: Record<string, any>[];
  columns: Record<string, any>[];
  className?: string;
  scroll?: { x: number; y: number };
};
const useTable = (props: ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useTable>;

export default useTable;
