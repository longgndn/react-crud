export type ReceivedProps = Record<string, any>;

const useHomePage = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useHomePage>;

export default useHomePage;
