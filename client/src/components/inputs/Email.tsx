import ArrowLink from "../ui/icons/ArrowLink";

const Email = () => {
  return (
    <div className="relative w-full">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="bg-grey-50 pl-6 py-4 rounded-full placeholder:text-grey-300 placeholder:font-medium placeholder:text-base outline-none w-full"
      />
      <button
        type="submit"
        value="Submit"
        className="invert absolute top-0 right-0 bottom-0 pr-4"
      >
        <ArrowLink />
      </button>
    </div>
  );
};

export default Email;
