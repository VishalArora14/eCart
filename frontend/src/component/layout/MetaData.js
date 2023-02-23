import React from "react";
import Helmet from "react-helmet";

// whichever component calls this metaData and passes a title the same title will be displayed 
// on the title of the web page till the till that component is running
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
