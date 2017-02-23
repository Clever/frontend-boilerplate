import classnames from "classnames";
import React, {PropTypes} from "react";

import {FlexBox, FlexItem, ItemAlign} from "clever-components";
import Logo from "./Logo";

import "./TopBar.less";


export default function TopBar({className}) {
  const {cssClass} = TopBar;

  return (
    <FlexBox alignItems={ItemAlign.CENTER} className={classnames(cssClass.CONTAINER, className)}>
      <FlexBox
        alignItems={ItemAlign.CENTER}
        className={cssClass.HOME_LINK}
        component="a"
        href="//clever.com"
        target="_blank"
      >
        <Logo className={cssClass.LOGO} />
      </FlexBox>
      <h1 className={cssClass.TITLE}>Boilerplate Example</h1>
    </FlexBox>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
};

TopBar.cssClass = {
  CONTAINER: "TopBar",
  GITHUB_LINK: "TopBar--githubLink",
  GITHUB_LINK_CONTAINER: "TopBar--githubLinkContainer",
  HOME_LINK: "TopBar--homeLink",
  LOGO: "TopBar--logo",
  TITLE: "TopBar--title",
  SUBTITLE: "TopBar--subtitle",
};
