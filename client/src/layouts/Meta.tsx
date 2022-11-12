import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
}

const Meta = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="nftsea.io" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default Meta;
