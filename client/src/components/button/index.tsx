interface Props {
  title: string;
  arrow?: boolean;
}

const Button = ({ title, arrow }: Props) => {
  return (
    <button className="flex w-full px-6 py-4 max-h-14 mx-auto justify-center text-base font-medium rounded-full bg-grey-900 text-white">
      {title}
    </button>
  );
};

export default Button;
