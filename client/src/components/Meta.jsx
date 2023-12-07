import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Technorizen Store",
  description: "This a Machine Coding Round of Technorizen Software Solutions Pvt. Ltd.",
  keywords: "Buy Anything",
};

export default Meta;
