export type ReceivedProps = Record<string, any>;

const useInltLayout = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useInltLayout>;

export default useInltLayout;
