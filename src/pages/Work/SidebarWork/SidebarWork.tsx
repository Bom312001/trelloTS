import { useState } from "react";
import {
  CButton,
  CCloseButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
  CNavTitle,
  CPopover,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarDays,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEllipsis,
  faGear,
  faPlus,
  faTable,
  faTableList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./SidebarWork.module.scss";
import imgMu from "../../../assets/images/mu.png";
import Modal from "./Modal/Modal";
import Popover from "../../Home/Popover/Popover";
import "./GlobalStyleBarWork.scss";
import routes from "../../../config/routes";

const cx = classNames.bind(styles);

function SidebarWork() {
  const [hideBtn, setHideBtn] = useState(true);
  const [show, setShow] = useState(true);
  // const [sidebarClass, setSidebarClass] = useState('wrapper-body');

  const handleToggleSidebar = () => {
    setShow(!show);
    // setSidebarClass(show ? 'wrapper-body hide-sidebar' : 'wrapper-body');
    setHideBtn(!hideBtn);
  };

  return (
    <aside
      className={cx("wrapper", {
        "wrapper-0": show,
      })}
    >
      <div
        className={
          cx("btn-show", { "hide-btn": hideBtn }) + " fixed cursor-pointer"
        }
      >
        <CButton
          color="secondary ms-auto rounded-circle"
          onClick={handleToggleSidebar}
          className="absolute top-7 "
        >
          <FontAwesomeIcon
            className="text-white"
            icon={faChevronRight as IconProp}
          />
        </CButton>
      </div>

      <div
        // className={cx('wrapper-body')}
        className={cx("wrapper-body", {
          "hide-sidebar": show,
        })}
      >
        <CSidebar
          // hidden={!show}
          className={cx("custom-sidebar", "fixed")}
        >
          <CSidebarNav className={cx("sidebar-nav")}>
            <CNavTitle className={cx("sidebar-title", "flex", "items-center")}>
              <div className="flex items-center">
                <img
                  src={imgMu}
                  alt="Tuan Anh Avatar"
                  className="w-9 h-9 rounded mr-2"
                />
                <div className="flex flex-col flex-1">
                  <span className="text-sm normal-case">Tuan Anh</span>
                  <span className="text-xs normal-case font-normal">
                    Miễn phí
                  </span>
                </div>
              </div>
              <CButton
                color="light ms-auto"
                className={cx("btn-hide")}
                onClick={handleToggleSidebar}
              >
                <FontAwesomeIcon icon={faChevronLeft as IconProp} />
              </CButton>
            </CNavTitle>

            <CNavItem className="flex items-center pl-6 h-8 py-2 mt-3">
              <NavLink
                to="/"
                className="inline-block w-full no-underline text-white"
              >
                <FontAwesomeIcon className="mr-3" icon={faTable as IconProp} />
                <span className="font-normal text-sm">Bảng</span>
              </NavLink>
            </CNavItem>

            <CNavItem className="flex items-center pl-6 h-8 py-2">
              <NavLink
                to="/"
                className="inline-flex items-center w-full no-underline text-white"
              >
                <FontAwesomeIcon className="mr-3" icon={faUser as IconProp} />
                <div>
                  <span className="font-normal text-sm">Thành viên</span>
                </div>
              </NavLink>
              <Modal />
            </CNavItem>

            <CDropdown className={cx("drop-tab")} placement="right-start">
              <CDropdownToggle className={cx("drop-btn")}>
                <CNavItem className="flex items-center pl-6 h-10 py-2">
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faGear as IconProp}
                    />
                  </div>
                  <span className="font-normal text-sm text-white mr-3">
                    Các cài đặt Không gian làm việc
                  </span>
                  <div className="mr-4">
                    <FontAwesomeIcon icon={faChevronDown as IconProp} />
                  </div>
                </CNavItem>
              </CDropdownToggle>
              <CDropdownMenu className={cx("drop-menu")}>
                <CDropdownItem href="#">
                  Các cài đặt Không gian làm việc
                </CDropdownItem>
                <CDropdownItem href="#">
                  Nâng cấp không gian làm việc
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CNavTitle className="h-8 my-2">
              <div className="flex items-center h-full grow">
                <div className="text-sm normal-case font-semibold text-white">
                  Dạng xem không gian làm việc
                </div>
              </div>
            </CNavTitle>

            <CNavItem
              className={cx(
                "nav-item",
                "flex",
                "items-center",
                "pl-6",
                "h-8",
                "py-2"
              )}
            >
              <NavLink
                to={routes.view}
                className="inline-flex items-center w-full no-underline text-white"
              >
                <div className="flex items-center flex-1">
                  <FontAwesomeIcon
                    className="mr-3 "
                    icon={faTableList as IconProp}
                  />
                  <span className="font-normal text-sm">Bảng</span>
                </div>
              </NavLink>
              <FontAwesomeIcon
                className={cx("nav-item__icon", "mr-4", "py-1", "px-2")}
                icon={faEllipsis as IconProp}
              />
            </CNavItem>

            <CNavItem
              className={cx(
                "nav-item",
                "flex",
                "items-center",
                "pl-6",
                "h-8",
                "py-2"
              )}
            >
              <NavLink
                to="/"
                className="inline-flex items-center w-full no-underline text-white"
              >
                <div className="flex items-center flex-1">
                  <FontAwesomeIcon
                    className="mr-3 "
                    icon={faCalendarDays as IconProp}
                  />
                  <span className="font-normal text-sm">Lịch</span>
                </div>
              </NavLink>
              <FontAwesomeIcon
                className={cx("nav-item__icon", "mr-4", "py-1", "px-2")}
                icon={faEllipsis as IconProp}
              />
            </CNavItem>

            <CNavTitle className="mt-0">
              <div className="flex items-center grow justify-between">
                <span className="text-sm normal-case font-semibold text-white">
                  Các bảng của bạn
                </span>
                <CPopover
                  className="popover"
                  placement="right"
                  title={
                    <div className="flex justify-between">
                      <span>"Tạo bảng"</span>
                      <CCloseButton />
                    </div>
                  }
                  // tabindex="0"
                  // trigger="focus"
                  content={<Popover />}
                >
                  <div className={cx("title-icon")}>
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faPlus as IconProp}
                    />
                  </div>
                </CPopover>
              </div>
            </CNavTitle>

            <CNavItem
              className={cx(
                "nav-item",
                "flex",
                "items-center",
                "pl-6",
                "h-8",
                "py-2"
              )}
            >
              <NavLink
                to="/"
                className="inline-flex items-center w-full no-underline text-white"
              >
                <div className="flex items-center">
                  <img
                    src={imgMu}
                    alt="Tuan Anh Avatar"
                    className="w-8 h-8 rounded mr-2"
                  />
                  <span className="text-sm ">Tuan Anh</span>
                </div>
              </NavLink>
              <FontAwesomeIcon
                className={cx("nav-item__icon", "mr-4", "py-1", "px-2")}
                icon={faEllipsis as IconProp}
              />
            </CNavItem>
          </CSidebarNav>
        </CSidebar>
      </div>
    </aside>
  );
}

export default SidebarWork;
