import classnames from "classnames";
import React, {PropTypes} from "react";

//import MorePropTypes from "utils/MorePropTypes";
//import {MorePropTypes} from "clever-components/src/utils/MorePropTypes";
import NavLink from "./NavLink";
import {FlexBox} from "clever-components";

import "./NavGroup.less";

class MorePropTypes {
  static makeRequirable(propType) {
    propType.isRequired = (props, propName, componentName) => {
      const value = props[propName];
      if (value === null || value === undefined) {
        return new Error(`Missing required prop \`${propName}\` in ${componentName}.`);
      }

      return propType(props, propName, componentName);
    };

    return propType;
  }

  static instanceOfComponent(componentClass) {
    return MorePropTypes.makeRequirable((props, propName, parentComponentName) => {
      const value = props[propName];

      if (value === null || value === undefined) {
        return null;
      }

      if (value.type !== componentClass) {
        return new Error(
          `Invalid prop \`${propName}\` supplied to ${parentComponentName}. `
          + `Must be of type ${componentClass}.`
        );
      }

      return null;
    });
  }

  static oneOrManyOf(propType) {
    return PropTypes.oneOfType([
      propType,
      PropTypes.arrayOf(propType),
    ]);
  }
}

export default function NavGroup({children, className, title}) {
  const {cssClass} = NavGroup;

  return (
    <FlexBox className={classnames(cssClass.CONTAINER, className)} column>
      <h3 className={cssClass.TITLE}>{title}</h3>
      <FlexBox className={cssClass.SUB_NAV} column>
        {children}
      </FlexBox>
    </FlexBox>
  );
}

NavGroup.propTypes = {
  children: MorePropTypes.oneOrManyOf(NavLink).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NavGroup.cssClass = {
  CONTAINER: "SideBar--NavGroup",
  SUB_NAV: "SideBar--NavGroup--subNav",
  TITLE: "SideBar--NavGroup--title",
};
