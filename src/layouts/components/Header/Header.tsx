import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import TippyHeadless from "@tippyjs/react/headless";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CHeader,
  CNav,
  CNavbarBrand,
  CNavbar,
  CButton,
  CFormInput,
  CNavItem,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CImage,
  CDropdownItem,
  CDropdownDivider,
  CFormSwitch,
} from "@coreui/react";
import {
  faArrowUpRightFromSquare,
  faBars,
  faBell,
  faChevronDown,
  faCircleQuestion,
  faEllipsisVertical,
  faSearch,
  faStar,
  faTable,
  faTableList,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GlobalStyle.scss";

import { helpOption } from "../../../assets/data/HelpOption";
import { discoverData } from "../../../assets/data/Discover";
import {
  IconNofifi,
  IconTrello,
  IconTrelloSm,
} from "../../../assets/images/icon";
import anh1 from "../../../assets/images/anh1.jpg";
import imgInfo from "../../../assets/images/imgInfo.png";
import { PopperWrapper } from "../Popper";
import config from "../../../config";
import routes from "../../../config/routes";

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState([1]);
  const [showResult, setShowResult] = useState(false);

  const [showAlert, setShowAlert] = useState(true);

  const handleSwitchChange = () => {
    setShowAlert(!showAlert);
  };

  // useEffect(() => {
  //         setSearchResult([1,2])
  // },[])

  const handleHideResult = () => {
    setShowResult(false);
  };

  //logout
  const handleRemoveLocal = () => {
    localStorage.removeItem("email");
    navigate(routes.login);
  };

  return (
    <div className={cx("wrapper-header", "w-full", "fixed", "z-20")}>
      <CHeader className={cx("header-container")}>
        <CNavbar className="py-0 pl-0">
          <CNavbarBrand>
            <CDropdown>
              <CDropdownToggle className="bg-transparent border-0">
                <div
                  title="Còn nữa từ Atlanssian"
                  className={cx("logo-option", "ml-1", "text-white")}
                >
                  <FontAwesomeIcon icon={faBars as IconProp} />
                </div>
              </CDropdownToggle>
              <CDropdownMenu className="mt-2">
                <div>
                  <a
                    href="/"
                    className="no-underline hover:underline mx-8 mt-1 font-medium"
                  >
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap mx-1">
                      Bắt đầu sử dụng sản phẩm Atlassian
                    </span>
                    <FontAwesomeIcon
                      className="text-xs mx-1"
                      icon={faArrowUpRightFromSquare as IconProp}
                    />
                  </a>
                  <div className=" flex items-center py-2 ml-6 my-4 cursor-pointer hover:bg-[#EBECF0] no-underline">
                    <div className="bg-blue-700 flex rounded w-8 h-8 justify-center items-center">
                      <IconTrelloSm />
                    </div>
                    <span className="text-sm ml-2 ">Trello</span>
                  </div>
                  <div className="ml-3">
                    <div>
                      <h5>Khám phá</h5>
                    </div>
                    {discoverData.map((data) => (
                      <div
                        key={data.id.toString()}
                        className="flex items-center py-1 px-2 mb-1 hover:bg-[#EBECF0] rounded cursor-pointer"
                      >
                        <div className="flex bg-slate-200 rounded w-8 h-8 justify-center items-center">
                          <data.icon />
                        </div>
                        <div className="flex flex-col ml-2">
                          <span className="text-sm">{data.title}</span>
                          <span className="text-xs mt-1">{data.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarBrand>

          <CNavbarBrand className="flex">
            <NavLink className="inline-block no-underline" to="/">
              <div className={cx("logo-trello")}>
                <IconTrello />
                <span className="ml-1 text-white font-bold">Trello</span>
              </div>
            </NavLink>
          </CNavbarBrand>

          <CNav className="ml-auto bg-transparent text-white">
            <CNavItem>
              <CDropdown autoClose="outside">
                <CDropdownToggle className="flex items-center bg-transparent p-0 border-0">
                  <CButton
                    className={cx("btn", "relative", "border-0", "mr-1")}
                  >
                    <span title="Các không gian làm việc">
                      Các không gian làm việc
                    </span>
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faChevronDown as IconProp}
                    />
                  </CButton>
                </CDropdownToggle>
                <CDropdownMenu className={cx("drop-menu", "mt-2")}>
                  <h6 className="pl-2 text-xs font-semibold">
                    Không gian làm việc hiện tại
                  </h6>
                  <NavLink to={config.routes.boards} className="no-underline">
                    <CDropdownItem>
                      <div className="flex flex-col item-center text-slate-900">
                        <div className="flex items-center">
                          <CImage src={anh1} className="w-10 h-10 rounded" />
                          <span className="ml-1 flex-1 text-sm font-semibold">
                            Tuan Anh
                          </span>
                        </div>
                      </div>
                    </CDropdownItem>
                  </NavLink>
                  <CDropdownDivider />
                  <div>
                    <h6 className="pl-2 text-xs font-semibold">
                      Các không gian làm việc của bạn
                    </h6>
                    <CDropdownItem>
                      <div className="flex flex-col item-center text-slate-900">
                        <div className="flex items-center">
                          <CImage src={anh1} className="w-10 h-10 rounded" />
                          <span className="ml-1 flex-1 text-sm font-semibold">
                            Tuan Anh
                          </span>
                        </div>
                      </div>
                    </CDropdownItem>
                  </div>
                  <div>
                    <h6 className="pl-2 text-xs font-semibold">
                      Các không gian làm việc của khách
                    </h6>
                    <CDropdownItem>
                      <div className="flex flex-col item-center text-slate-900">
                        <div className="flex items-center">
                          <CImage src={anh1} className="w-10 h-10 rounded" />
                          <span className="ml-1 flex-1 text-sm font-semibold">
                            Tuan Anh
                          </span>
                        </div>
                      </div>
                    </CDropdownItem>
                  </div>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>

            <CNavItem>
              <CDropdown>
                <CDropdownToggle className="flex items-center bg-transparent p-0 border-0">
                  <CButton className={cx("btn", "border-0", "mr-1")}>
                    <span title="Gần đây">Gần đây </span>
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faChevronDown as IconProp}
                    />
                  </CButton>
                </CDropdownToggle>
                <CDropdownMenu className={cx("drop-menu", "mt-2")}>
                  <CDropdownItem className="mb-2">
                    <div className="flex item-center h-8">
                      <CImage
                        className="w-10 h-8"
                        align="start"
                        rounded
                        src={anh1}
                      />
                      <div className="flex flex-1 justify-between items-center ml-1">
                        <h6 className="flex flex-col pt-2">
                          <span>1</span>
                          <span className="text-xs">tuan anh</span>
                        </h6>
                        <FontAwesomeIcon icon={faStar as IconProp} />
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem className="mb-2">
                    <div className="flex item-center h-8">
                      <CImage
                        className="w-10 h-8"
                        align="start"
                        rounded
                        src={anh1}
                      />
                      <div className="flex flex-1 justify-between items-center ml-1">
                        <h6 className="flex flex-col pt-2">
                          <span>1</span>
                          <span className="text-xs">tuan anh</span>
                        </h6>
                        <FontAwesomeIcon icon={faStar as IconProp} />
                      </div>
                    </div>
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>

            <CNavItem>
              <CDropdown>
                <CDropdownToggle className="flex items-center bg-transparent p-0 border-0">
                  <CButton className={cx("btn", "border-0", "mr-1")}>
                    <span title="Đã đánh dấu sao">Đã đánh dấu sao</span>
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faChevronDown as IconProp}
                    />
                  </CButton>
                </CDropdownToggle>
                <CDropdownMenu className={cx("drop-menu", "mt-2")}>
                  <CDropdownItem className="mb-2">
                    <div className="flex item-center h-8">
                      <CImage
                        className="w-10 h-8"
                        align="start"
                        rounded
                        src={anh1}
                      />
                      <div className="flex flex-1 justify-between items-center ml-1">
                        <h6 className="flex flex-col pt-2">
                          <span>1</span>
                          <span className="text-xs">tuan anh</span>
                        </h6>
                        <FontAwesomeIcon icon={faStar as IconProp} />
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem className="mb-2">
                    <div className="flex item-center h-8">
                      <CImage
                        className="w-10 h-8"
                        align="start"
                        rounded
                        src={anh1}
                      />
                      <div className="flex flex-1 justify-between items-center ml-1">
                        <h6 className="flex flex-col pt-2">
                          <span>1</span>
                          <span className="text-xs">tuan anh</span>
                        </h6>
                        <FontAwesomeIcon icon={faStar as IconProp} />
                      </div>
                    </div>
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>

            <CNavItem>
              <CDropdown>
                <CDropdownToggle className="flex items-center bg-transparent p-0 border-0">
                  <CButton className={cx("btn", "border-0", "mr-1")}>
                    <span title="Mẫu">Mẫu</span>
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faChevronDown as IconProp}
                    />
                  </CButton>
                </CDropdownToggle>
                <CDropdownMenu className="mt-2">
                  <CDropdownItem className={cx("drop-menu-item")}>
                    <div className="flex flex-col item-center text-slate-900 p-3 ">
                      <div className="flex items-center mb-3">
                        <FontAwesomeIcon
                          className="w-4 h-4"
                          icon={faTableList as IconProp}
                        />
                        <span className="ml-1 text-sm font-normal">
                          Xem hàng trăm mẫu từ cộng đồng Trello
                        </span>
                      </div>
                      <CButton className="border-0">
                        <a href="/" className="text-gray-200 no-underline">
                          Khám phá các mẫu
                        </a>
                      </CButton>
                    </div>
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>

            <CNavItem>
              <CDropdown>
                <CDropdownToggle className="flex items-center bg-transparent p-0 border-0 after:none">
                  <CButton className={cx("btn--new", "border-0", "mr-1")}>
                    <span>Tạo mới</span>
                  </CButton>
                </CDropdownToggle>
                <CDropdownMenu className={cx("drop-menu", "mt-2")}>
                  <CButton
                    className={cx(
                      "drop-menu_btn",
                      "mb-2",
                      "h-full",
                      "border-0"
                    )}
                  >
                    <div className="flex flex-col item-center text-slate-900">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          className="w-4 h-4"
                          icon={faTable as IconProp}
                        />
                        <span className="ml-1 text-sm font-normal">
                          Tạo bảng
                        </span>
                      </div>
                      <p className="text-xs mt-1 break-all">
                        Một bảng được tạo thành từ các thẻ được sắp xếp trong
                        danh sách.
                      </p>
                    </div>
                  </CButton>
                  <CButton
                    className={cx(
                      "drop-menu_btn",
                      "mb-2",
                      "h-full",
                      "border-0"
                    )}
                  >
                    <div className="flex flex-col item-center text-slate-900">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          className="w-4 h-4"
                          icon={faUserGroup as IconProp}
                        />
                        <span className="ml-1 text-sm font-normal">
                          Tạo không gian làm việc
                        </span>
                      </div>
                      <p className="text-xs mt-1 break-all">
                        Một bảng được tạo thành từ các thẻ được sắp xếp trong
                        danh sách.
                      </p>
                    </div>
                  </CButton>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>
          </CNav>
        </CNavbar>

        {/* search */}
        <CNavbar className="py-0">
          <TippyHeadless
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("box")} tabIndex={-1} {...attrs}>
                <PopperWrapper>Thao tác công việc</PopperWrapper>
              </div>
            )}
            onClickOutside={handleHideResult}
          >
            <div className={cx("search", "relative")}>
              <FontAwesomeIcon
                className={cx("search__icon", "absolute", "pr-1")}
                icon={faSearch as IconProp}
              />
              <CFormInput
                placeholder="Tìm kiếm..."
                onFocus={() => setShowResult(true)}
                className={cx("search__input")}
              ></CFormInput>
            </div>
          </TippyHeadless>

          <div className="flex items-center ">
            {/* notifi */}
            <CDropdown autoClose="outside">
              <CDropdownToggle className="bg-transparent p-0 border-0">
                <div
                  title="Thông báo"
                  className={cx("notifi", "text-white", "mr-3")}
                >
                  <FontAwesomeIcon
                    className="ml-3 w-5 h-5"
                    icon={faBell as IconProp}
                  />
                </div>
              </CDropdownToggle>
              <CDropdownMenu className={cx("drop-menu", "mt-3")}>
                <div className="flex flex-row items-center justify-between pb-3 mt-3 mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
                  <h3 className="ml-3 text-xl">Thông báo</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <CFormSwitch
                        checked={showAlert}
                        label="Chỉ hiện thị chưa được đọc"
                        id="formSwitchCheck"
                        onChange={handleSwitchChange}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="ml-4"
                        icon={faEllipsisVertical as IconProp}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[432px] flex flex-col items-center justify-center my-3">
                  {showAlert && (
                    <div className="flex flex-col items-center justify-center animate-pulse">
                      <IconNofifi />
                      <h3 className="mt-4">Không có thông báo được đọc</h3>
                    </div>
                  )}
                  {!showAlert && (
                    <div className="flex flex-col items-center justify-center animate-pulse">
                      <IconNofifi />
                      <h3 className="mt-4">Không có thông báo </h3>
                    </div>
                  )}
                </div>
              </CDropdownMenu>
            </CDropdown>
            {/*Help  */}
            <CDropdown>
              <CDropdownToggle className="bg-transparent p-0 border-0">
                <div
                  title="Thông tin"
                  className={cx("help", "text-white", "mr-3")}
                >
                  <FontAwesomeIcon
                    className="ml-1 w-5 h-5"
                    icon={faCircleQuestion as IconProp}
                  />
                </div>
              </CDropdownToggle>
              <CDropdownMenu className={cx("drop-menu-item", "mt-3")}>
                <div className="flex justify-center flex-col ">
                  <CButton className="bg-transparent border-0">
                    {/* <CDropdownItem> */}
                    <div className="hover:bg-[#F4F5F7] rounded">
                      <div className="w-full h-40 rounded">
                        <img
                          className="rounded w-full"
                          src={imgInfo}
                          alt="MU"
                        />
                      </div>
                      <div className="w-full pt-4 mt-2 text-slate-700">
                        Nâng cao hiệu quả sử dụng của bảng bằng những Tiện ích
                        bổ sung của Trello
                      </div>
                    </div>
                    {/* </CDropdownItem> */}
                  </CButton>
                  <CButton className="bg-transparent border-0">
                    <span className="underline text-sm text-[#5e6c84]">
                      Xem một mẹo mới
                    </span>
                  </CButton>
                </div>
                <CDropdownDivider />
                <div>
                  <ul className={cx("help-list", "text-center")}>
                    {helpOption.map((link) => (
                      <CButton
                        key={link.id.toString()}
                        className={cx(
                          "help-list__item",
                          "inline-block",
                          "mr-3"
                        )}
                      >
                        <a
                          className={cx("help-list__item-link")}
                          href={link.route.toString()}
                        >
                          {link.title}
                        </a>
                      </CButton>
                    ))}
                  </ul>
                </div>
              </CDropdownMenu>
            </CDropdown>
            {/* tai khoan */}
            <CDropdown>
              <CDropdownToggle className="bg-transparent p-0 border-0">
                <div title="Tài khoản" className={cx("avatar")}>
                  <img
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/109791092?s=40&v=4"
                    alt="MU"
                  />
                </div>
              </CDropdownToggle>
              <CDropdownMenu className="mt-2 text-black">
                <h3 className="px-3 text-xs uppercase font-bold">Tài khoản</h3>
                <CDropdownItem>
                  <div className="flex w-full">
                    <div className="w-10 h-10">
                      <img
                        className="rounded-full"
                        src="https://avatars.githubusercontent.com/u/109791092?s=40&v=4"
                        alt="MU"
                      />
                    </div>
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-normal">
                        Nguyễn Xuân Tuấn Anh
                      </span>
                      <span className="text-xs text-[#B3BAC5] text-ellipsis overflow-hidden">
                        tuananh0301tb@gmail.com
                      </span>
                    </div>
                  </div>
                </CDropdownItem>
                <CDropdownItem>Chuyển đổi tài khoản</CDropdownItem>
                <CDropdownItem className="">
                  <span>Quản lý tài khoản</span>
                  <FontAwesomeIcon
                    className="float-right mt-[6px] text-sm"
                    icon={faArrowUpRightFromSquare as IconProp}
                  />
                </CDropdownItem>
                <CDropdownDivider />
                <h3 className="px-3 text-xs uppercase font-bold">Trello</h3>
                <CDropdownItem>Hồ sơ và hiển thị</CDropdownItem>
                <CDropdownItem>Hoạt động</CDropdownItem>
                <CDropdownItem>Thẻ</CDropdownItem>
                <CDropdownItem>Cài đặt</CDropdownItem>
                <CDropdownItem>Trợ giúp</CDropdownItem>
                <CDropdownItem>Phím tắt</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem onClick={handleRemoveLocal}>
                  Đăng xuất
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
        </CNavbar>
      </CHeader>
    </div>
  );
}

export default Header;
