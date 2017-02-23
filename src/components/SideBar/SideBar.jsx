import classnames from "classnames";
import React, {PropTypes} from "react";

import NavGroup from "./NavGroup";
import NavLink from "./NavLink";
import {FlexBox} from "clever-components";

import "./SideBar.less";


export default function SideBar({className}) {
  const {cssClass} = SideBar;

  return (
    <FlexBox className={classnames(cssClass.CONTAINER, className)} column>
      <NavLink href="/example">Example</NavLink>
    </FlexBox>
  );
}

SideBar.propTypes = {
  className: PropTypes.string,
};

SideBar.cssClass = {
  CONTAINER: "SideBar",
};
