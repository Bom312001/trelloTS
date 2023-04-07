import { useState } from "react";
import {
  CBadge,
  CDropdownDivider,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Scrollbars as CustomScrollBar } from "react-custom-scrollbars";

import { samples } from "../../../assets/data/Sample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faHeartbeat,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { workData } from "../../../assets/data/WorkOption";
import imgMu from "../../../assets/images/mu.png";
import Modal from "./Modal/Modal";
import "./GlobalStyle.scss";
import config from "../../../config";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function Sidebar() {
  // dành cho thư viện scrollbar
  const [hideScrollbar, setHideScrollbar] = useState(true);
  const [show, setShow] = useState(true);

  type CustomScrollbarProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };

  const customScrollbar = (className: string) => {
    return (props: CustomScrollbarProps) => (
      <div className={cx(className)} {...props}></div>
    );
    /* eslint-disable jsx-a11y/anchor-is-valid */
  };

  return (
    <aside className={cx("wrapper")}>
      <div className={cx("wrapper-body")}>
        <CustomScrollBar
          hideTracksWhenNotNeeded
          autoHide={hideScrollbar}
          autoHideTimeout={0}
          renderView={customScrollbar("scrollbar-view")}
          renderTrackVertical={customScrollbar("scrollbar-track")}
          renderThumbVertical={customScrollbar("scrollbar-thumb")}
          onMouseEnter={() => setHideScrollbar(false)}
          onMouseLeave={() => setHideScrollbar(true)}
        >
          <CSidebar hidden={!show} className={cx("custom-sidebar", "fixed")}>
            <CSidebarNav>
              <CNavItem href="#">
                <NavLink
                  className="inline-block w-full no-underline pl-4"
                  to={config.routes.view}
                >
                  <span className="text-[#172B4D] font-bold">With badge</span>
                  <CBadge color="primary ms-auto">NEW</CBadge>
                </NavLink>
              </CNavItem>

              <CNavItem className="flex h-12 items-center">
                <NavLink
                  className="inline-block w-full no-underline pl-4"
                  to={config.routes.boards}
                >
                  <FontAwesomeIcon
                    className="mr-1 text-slate-500"
                    icon={faTableList as IconProp}
                  />
                  <span className="text-[#172B4D] font-bold">Bảng</span>
                </NavLink>
              </CNavItem>

              <CNavGroup
                toggler={
                  <NavLink
                    to={config.routes.templates}
                    className="inline-block w-full no-underline pl-1"
                  >
                    <FontAwesomeIcon
                      className="mr-1 text-slate-500"
                      icon={faBuilding as IconProp}
                    />
                    <span className="font-bold text-[#172B4D]">Mẫu</span>
                  </NavLink>
                }
              >
                {samples.map((sample) => (
                  <CNavItem key={sample.id.toString()} href="#">
                    <span className="text-xs">{sample.title}</span>
                  </CNavItem>
                ))}
              </CNavGroup>

              <CNavItem className="text-slate-900 flex h-12 items-center">
                <NavLink
                  className="inline-block w-full no-underline pl-4"
                  to="/"
                >
                  <FontAwesomeIcon
                    className="mr-1 text-slate-500"
                    icon={faHeartbeat as IconProp}
                  />
                  <span className="text-[#172B4D] font-bold">Trang chủ</span>
                </NavLink>
              </CNavItem>

              <CDropdownDivider />

              <CNavTitle>
                <div className="flex items-center grow justify-between">
                  <span className="text-xs font-semibold text-[#5e6c84]">
                    Các không gian làm việc khác
                  </span>
                  {/* <FontAwesomeIcon icon={faPlus}/> */}
                  <button>Click </button>
                  <Modal />
                </div>
              </CNavTitle>

              <CNavGroup
                // toggler="Tuan Anh"
                toggler={
                  <div className="flex items-center">
                    <img
                      src={imgMu}
                      alt="Tuan Anh Avatar"
                      className="w-8 h-8 rounded mr-2"
                    />
                    <span className="text-sm font-bold text-slate-900">
                      Tuan Anh
                    </span>
                  </div>
                }
              >
                {workData.map((work) => (
                  <CNavItem
                    className="work"
                    key={work.id.toString()}
                    href={work.path.toString()}
                  >
                    <div
                      className={cx(
                        "work-item",
                        "flex",
                        "grow",
                        "justify-between"
                      )}
                    >
                      <div className="flex justify-center items-center">
                        <work.icon />
                        <span className="ml-2 text-xs">{work.title}</span>
                      </div>
                      {work.btn && (
                        <div className={cx("work-item__icon", "flex1")}>
                          <FontAwesomeIcon icon={work.btn} />
                        </div>
                      )}
                    </div>
                  </CNavItem>
                ))}
              </CNavGroup>
            </CSidebarNav>
            {/* <CSidebarToggler /> */}
          </CSidebar>
        </CustomScrollBar>
      </div>
    </aside>
  );
}

export default Sidebar;
