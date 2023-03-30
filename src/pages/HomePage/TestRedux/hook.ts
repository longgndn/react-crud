export type ReceivedProps = Record<string, any>;

const useTest = (props: any) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useTest>;

export default useTest;
