interface Props {
  successCode: string;
}

export const SuccessModal = ({ successCode }: Props) => {
  return <div>{successCode}</div>;
};
