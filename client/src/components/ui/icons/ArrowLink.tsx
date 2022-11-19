interface Props {
  customClass: string;
}

const ArrowLink = ({ customClass }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 17 17 7M7 7h10v10"
        className={`${customClass}`}
      />
    </svg>
  );
};

export default ArrowLink;
