import { useState } from "react";
import {
  CBadge,
  CDropdownDivider,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import classNames from "classnames/bind";
import styles from "./SidebarButler.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBucket, faRocket, faStar } from "@fortawesome/free-solid-svg-icons";
import "./GlobalStyle.scss";
import config from "../../../../config";
import { NavLink } from "react-router-dom";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { ButlerSidbar } from "../../../../assets/data/ButlerData/ButlerSideBar";

const cx = classNames.bind(styles);

function SidebarButler() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("wrapper-body")}>
        <CSidebar className={cx("custom-sidebar", "fixed")}>
          <CNavTitle className="text-black">
            <FontAwesomeIcon icon={faBucket as IconProp} />
            Butler
          </CNavTitle>
          <CSidebarNav>
            {ButlerSidbar.map((data) => (
              <CNavItem
                className="flex h-10 items-center pl-3"
                key={data.id.toString()}
              >
                <FontAwesomeIcon
                  className="mr-1 text-slate-500"
                  icon={data.icon}
                />
                <span className="text-[#172B4D] font-bold">{data.title}</span>
              </CNavItem>
            ))}
          </CSidebarNav>
        </CSidebar>
      </div>
    </aside>
  );
}

export default SidebarButler;
