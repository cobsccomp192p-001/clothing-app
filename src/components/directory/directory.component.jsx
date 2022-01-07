import React from "react";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersectionProps }) => (
        <MenuItem key={id} {...othersectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections,
// });

export default Directory;
