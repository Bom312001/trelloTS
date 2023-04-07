import { useState } from "react";
import {
  CBadge,
  CDropdownDivider,
  CNavItem,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import classNames from "classnames/bind";
import styles from "./SidebarUtility.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faRocket, faStar } from "@fortawesome/free-solid-svg-icons";
import "./GlobalStyle.scss";
import config from "../../../../config";
import { NavLink } from "react-router-dom";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { UtilitySidbar } from "../../../../assets/data/UtilityData/UtilitySidbar";

const cx = classNames.bind(styles);

function SidebarUtility() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("wrapper-body", "min-w-[240px]")}>
        <CSidebar className={cx("custom-sidebar", "fixed")}>
          <CSidebarNav>
            <CNavItem className="flex h-10 items-center pl-3">
              <FontAwesomeIcon
                className="mr-1 text-slate-500"
                icon={faStar as IconProp}
              />
              <span className="text-[#172B4D] font-bold">Bảng</span>
            </CNavItem>

            <CNavItem className="text-slate-900 flex h-10 items-center pl-3">
              <FontAwesomeIcon
                className="mr-1 text-slate-500"
                icon={faRocket as IconProp}
              />
              <span className="font-bold text-[#172B4D]">Mẫu</span>
            </CNavItem>

            <CNavItem className="text-slate-900 flex h-10 items-center pl-3">
              <FontAwesomeIcon
                className="mr-1 text-slate-500"
                icon={faTrello as IconProp}
              />
              <span className="text-[#172B4D] font-bold">Trang chủ</span>
            </CNavItem>

            <div>
              {UtilitySidbar.map((data) => (
                <CNavItem
                  key={data.id.toString()}
                  className="text-slate-900 flex h-8 items-center pl-3"
                >
                  {data.title}
                </CNavItem>
              ))}
            </div>

            <CDropdownDivider />
          </CSidebarNav>
        </CSidebar>
      </div>
    </aside>
  );
}

export default SidebarUtility;
