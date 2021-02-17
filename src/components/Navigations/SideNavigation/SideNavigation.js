import React from "react";
import NavigationItems from "../../Navigations/RightContent/Items/Items";
import classes from "./SideNavigation.module.css";

const sideNavigation = (props) => {
  const { sideNavigationStyle, newNavigationStyle, gsapAnimation } = props;
  const classNameArr = [classes.SideNavigation];

  if (sideNavigationStyle) {
    classNameArr.push(classes.SideNavigationPos);
  }

  if (newNavigationStyle) {
    classNameArr.push(classes.SideNavigationBg);
  }

  return (
    <div className={classNameArr.join(" ")}>
      <ul>
        <NavigationItems
          stylename={classes.NavigationItems}
          gsapAnimation={gsapAnimation}
        />
      </ul>
    </div>
  );
};

export default sideNavigation;
