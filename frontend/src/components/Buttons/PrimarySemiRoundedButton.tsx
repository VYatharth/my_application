const PrimarySemiRoundedButton = (props: {
  label: string;
  action?: () => any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  const { label, action, type } = props;
  return (
    <button
      onClick={() => {
        action?.();
      }}
      type={type ?? 'button'}
      className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'
    >
      {label}
    </button>
  );
};

export default PrimarySemiRoundedButton;
