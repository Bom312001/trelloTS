import { useState } from "react";
import {
  CButton,
  CCloseButton,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormInput,
  CImage,
  CModal,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import {
  faAlignLeft,
  faBoltLightning,
  faChartSimple,
  faChevronDown,
  faClose,
  faEllipsis,
  faFilter,
  faLock,
  faRocket,
  faStar,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ContentWork.module.scss";
import Modal from "./Modal/Modal";
import { DataContent } from "../../../assets/data/DataContent/DataContent";
import { LevelData } from "../../../assets/data/DataContent/LevelData";
import imgUtility from "../../../assets/images/ImageBoard/imgUtility.png";
import { AutoMation } from "../../../assets/data/DataContent/AutoMation";
import { Notifi } from "../../../assets/data/DataContent/Notifi";

const cx = classNames.bind(styles);
function ContentWork() {
  const [visibleShare, setVisibleShare] = useState(true);
  const [visibleBtnBar, setVisibleBtnBar] = useState(false);

  const [selectedTitle, setSelectedTitle] = useState("Khớp bất kỳ");
  const [selectedText, setSelectedText] = useState(
    "Hiển thị trong không gian làm việc"
  );

  // const [isOpen, setIsOpen] = useState(false);
  const [isShowSpace, setIsShowSpace] = useState(false);
  const [isOpenUtili, setIsOpenUtili] = useState(false);
  const [isOpenAuto, setIsOpenAuto] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);

  // console.log(isOpen);

  return (
    <div className="w-full my-4 pt-2 px-1 pb-3">
      {/* <div className={cx('header-work', "px-1","flex", "items-center")}> */}
      <NavLink
        to="#"
        className={
          cx("work-name") +
          " no-underline text-white inline-flex  items-center justify-center text-sm mx-2"
        }
      >
        <span className="text-lg font-bold leading-8 px-3">1</span>
      </NavLink>

      {/* star */}
      <NavLink to="#">
        <CButton
          title="Đánh hoặc bỏ đánh dấu sao bảng này. Bảng được đánh dấu sao sẽ ở đầu danh sách Bảng."
          className={cx("work-icon-btn", "w-8", "h-8", "mx-2", "border-0")}
        >
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              className={cx("work-icon")}
              icon={faStar as IconProp}
            />
          </div>
        </CButton>
      </NavLink>

      {/* Ko gian làm việc */}
      <NavLink
        to="#"
        className={
          cx("work-link") +
          " no-underline text-white inline-flex items-center h-8 px-2 text-sm mx-2"
        }
      >
        <CDropdown
          visible={isShowSpace}
          onShow={() => setIsShowSpace(true)}
          onHide={() => setIsShowSpace(false)}
          autoClose="outside"
        >
          <CDropdownToggle
            className="bg-transparent border-0 w-full h-full"
            value={selectedText}
          >
            <div title="Tất cả các thành viên của không gian làm việc có thể xem và sửa bảng này.">
              <FontAwesomeIcon
                className="text-sm"
                icon={faUserGroup as IconProp}
              />
              <span className="pl-1 text-sm">{selectedText}</span>
            </div>
          </CDropdownToggle>
          <CDropdownMenu className={cx("drop-menu-space", "mt-3 w-96 z-10")}>
            <div className="flex items-center justify-between px-3">
              <div>Khả năng xem </div>
              <FontAwesomeIcon
                icon={faClose as IconProp}
                onClick={() => setIsShowSpace(!isShowSpace)}
              />
            </div>
            {DataContent.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                disabled={data.disabled}
                className="w-full whitespace-normal cursor-pointer"
                onClick={() => {
                  setSelectedText(`${data.header}`);
                  setIsShowSpace(false);
                }}
              >
                <div className="flex items-center w-full">
                  <FontAwesomeIcon
                    className="w-6 p-2 mr-2 text-sm"
                    icon={data.icon}
                  />
                  <div className="flex flex-col w-full">
                    <span className={cx("title", "text-sm")}>{data.title}</span>
                    <span className="text-xs">{data.text}</span>
                  </div>
                </div>
              </CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>
      </NavLink>

      {/* Bảng */}
      <NavLink
        to="#"
        className={
          cx("work-link") +
          " no-underline text-white inline-flex items-center h-8 px-2 text-sm mx-2"
        }
      >
        <div title="Bảng">
          <FontAwesomeIcon icon={faChartSimple as IconProp} />
          <span className="pl-1">Bảng</span>
        </div>
      </NavLink>

      {/* icon chervonDown */}
      <CDropdown
        visible={isShowIcon}
        onShow={() => setIsShowIcon(true)}
        onHide={() => setIsShowIcon(false)}
        autoClose="outside"
      >
        <CDropdownToggle className="bg-transparent border-0 w-full h-full">
          <CButton
            color="light"
            className={cx(
              "work-icon-btn",
              "w-8",
              "h-8",
              "mx-1",
              "mb-1",
              "border-0"
            )}
          >
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                className="text-white"
                icon={faChevronDown as IconProp}
              />
            </div>
          </CButton>
        </CDropdownToggle>
        <CDropdownMenu className="mt-11 w-80 z-10">
          <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
            <h3 className="ml-3 text-sm mx-auto">Nâng cấp cho chế độ xem</h3>
            <div>
              <FontAwesomeIcon
                className="ml-4 cursor-pointer"
                icon={faClose as IconProp}
                onClick={() => setIsShowIcon(false)}
              />
            </div>
          </div>
          {LevelData.map((data) => (
            <CDropdownItem
              key={data.id.toString()}
              disabled={data.disabled}
              className="w-full whitespace-normal"
            >
              <div className="flex items-center w-full">
                <FontAwesomeIcon
                  className="w-6 p-2 mr-2 text-sm"
                  icon={data.btn}
                />
                <div className="flex w-full items-center">
                  <FontAwesomeIcon
                    className="w-6 p-2 mr-2 text-sm"
                    icon={data.icon}
                  />
                  <div className="flex flex-1 justify-between">
                    <span className={cx("title", "text-sm")}>{data.title}</span>
                    <FontAwesomeIcon icon={data.iconLock} />
                  </div>
                </div>
              </div>
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>

      <div className="float-right pt-[2px]">
        {/* tiện ích */}
        <CDropdown
          visible={isOpenUtili}
          onShow={() => setIsOpenUtili(true)}
          onHide={() => setIsOpenUtili(false)}
          autoClose="outside"
        >
          <CDropdownToggle className="bg-transparent p-0 border-0 relative">
            <CButton
              title="Tiện ích bổ sung"
              className="mx-2 h-8 text-white"
              color="secondary"
            >
              <div className="flex items-center justify-center text-sm">
                <FontAwesomeIcon icon={faRocket as IconProp} />
                <span className="pl-1">Tiện ích bổ sung</span>
              </div>
            </CButton>
          </CDropdownToggle>
          <CDropdownMenu className="mt-3">
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Tiện ích bổ sung</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4 cursor-pointer"
                  icon={faClose as IconProp}
                  onClick={() => setIsOpenUtili(false)}
                />
              </div>
            </div>
            <div className="w-[432px] flex flex-col items-center justify-center my-3">
              <div className="flex flex-col items-center justify-center animate-pulse">
                <CImage className="w-40 h-36" src={imgUtility} />
                <h3 className="mt-4 text-sm px-4">
                  Đưa các tính năng bổ sung vào các bảng của bạn và tích hợp các
                  ứng dụng như Google Drive, Slack, và hơn thế nữa.
                </h3>
              </div>
            </div>
            <NavLink
              to="/works/utility"
              className="inline-block no-underline text-white w-full"
              onClick={() => setIsOpenUtili(false)}
            >
              <CButton className="w-11/12 ml-4">Thêm tiện ích bổ sung</CButton>
            </NavLink>
          </CDropdownMenu>
        </CDropdown>

        {/* auto hóa */}
        <CDropdown
          visible={isOpenAuto}
          onShow={() => setIsOpenAuto(true)}
          onHide={() => setIsOpenAuto(false)}
          autoClose="outside"
        >
          <CDropdownToggle className="bg-transparent p-0 border-0 relative">
            <CButton
              title="Tự động hóa"
              className="mx-2 h-8 text-white"
              color="secondary"
            >
              <div className="flex items-center justify-center text-sm">
                <FontAwesomeIcon icon={faBoltLightning as IconProp} />
                <div className="pl-1">Tự động hóa</div>
              </div>
            </CButton>
          </CDropdownToggle>
          <CDropdownMenu className=" mt-11 w-96 z-10">
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Tự động hóa</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4 cursor-pointer"
                  icon={faClose as IconProp}
                  onClick={() => setIsOpenAuto(false)}
                />
              </div>
            </div>
            {AutoMation.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                className="w-full whitespace-normal cursor-pointer"
                onClick={() => setIsOpenAuto(false)}
              >
                <NavLink
                  to={data.to}
                  className="inline-block w-full no-underline pl-4 text-[#172D4B] hover:text-[#172D4B]"
                >
                  <div className="flex items-center w-full ">
                    <FontAwesomeIcon
                      className="w-6 py-2 mr-2 text-sm"
                      icon={data.icon}
                    />
                    <span className={cx("title", "text-sm", "text-[#172D4B]")}>
                      {data.title}
                    </span>
                  </div>
                  <div className="flex w-full">
                    <span className="text-xs text-[#5e6c84]">{data.text}</span>
                  </div>
                </NavLink>
              </CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>

        {/* Filter */}
        {/* {isShowFilter ? 4 : 6}11 */}
        <CDropdown
          visible={isShowFilter}
          onShow={() => setIsShowFilter(true)}
          onHide={() => setIsShowFilter(false)}
          autoClose="outside"
        >
          <CDropdownToggle
            className={cx("filter-toggle") + " bg-transparent p-0 border-0"}
          >
            <CButton
              className={cx("work-btn") + " mx-2 h-8 text-white"}
              color="secondary"
            >
              <div
                title="Thẻ lọc bảng"
                className="flex items-center justify-center text-sm"
              >
                <FontAwesomeIcon icon={faFilter as IconProp} />
                <span className="pl-1">Lọc</span>
              </div>
            </CButton>
          </CDropdownToggle>
          <CDropdownMenu className={cx("menu-filter") + " mt-11 w-96 z-10"}>
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Lọc</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4"
                  icon={faClose as IconProp}
                  onClick={() => setIsShowFilter(false)}
                />
              </div>
            </div>
            <div className={cx("menu-filter__item")}>
              <div className="text-sm my-1">
                <CFormInput
                  label={
                    <span className="text-[#5e6c84] font-semibold pl-0">
                      Từ khóa
                    </span>
                  }
                  placeholder="Nhập từ khóa..."
                  text="Tìm kiếm các thẻ, các thành viên, các nhãn và hơn thế nữa."
                />
              </div>

              <div>
                <span className="text-[#5e6c84] font-semibold">Thành viên</span>
                <CFormCheck
                  id="flexCheckNoMember"
                  label="Không có thành viên"
                />
                <CFormCheck
                  id="flexCheckMember"
                  label="Các thẻ đã chỉ định cho tôi"
                />
              </div>

              <div>
                <span className="text-[#5e6c84] font-semibold">
                  Ngày hết hạn
                </span>
                <CFormCheck id="flexCheckDate" label="Không có ngày hết hạn" />
                <CFormCheck id="flexCheckDateMore" label="Quá hạn" />
                <CFormCheck
                  id="flexCheckDateDay"
                  label="Sẽ hết hạn vào ngày mai"
                />
                <CFormCheck
                  id="flexCheckDateWeek"
                  label="Sẽ hết hạn vào tuần sau"
                />
                <CFormCheck
                  id="flexCheckDateMonth"
                  label="Sẽ hết hạn vào tháng sau"
                />
                <CFormCheck id="flexCheckSucc" label="Đã đánh dấu hoàn thành" />
                <CFormCheck
                  id="flexCheckFail"
                  label="Không được đánh dấu là đã hoàn thành"
                />
              </div>

              <div>
                <span className="text-[#5e6c84] font-semibold">Nhãn</span>
                <CFormCheck id="flexCheckColor" label="Không có nhãn" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Chọn nhãn" />
              </div>
              <hr />
              <div>
                <CForm>
                  <CDropdown className="w-full p-0">
                    <CDropdownToggle color="" className="w-full p-0 border-0">
                      <div className="mb-2">
                        <CFormInput
                          className="relative"
                          readOnly
                          value={selectedTitle}
                        />
                        <FontAwesomeIcon
                          className="absolute top-3 right-4"
                          icon={faChevronDown as IconProp}
                        />
                      </div>
                    </CDropdownToggle>
                    <CDropdownMenu
                      className={cx("drop-menu", "mt-11", "w-full", "z-10")}
                    >
                      <CDropdownItem
                        className="w-full whitespace-normal"
                        onClick={() => setSelectedTitle("Khớp bất kỳ")}
                      >
                        <div className="flex items-center w-full">
                          <FontAwesomeIcon
                            className="w-6 p-2 mr-2"
                            icon={faLock as IconProp}
                          />
                          <div className="flex flex-col w-full">
                            <span className={cx("title")}>Khớp bất kỳ</span>
                            <span className="text-xs">
                              Chỉ có các thành viên nhóm mới có thể xem và sửa
                              Nối bất kỳ nhãn với bất kỳ thành viên nào
                            </span>
                          </div>
                        </div>
                      </CDropdownItem>
                      <CDropdownItem
                        className="w-full whitespace-normal"
                        onClick={() => setSelectedTitle("Khớp hoàn toàn")}
                      >
                        <div className="flex items-center w-full">
                          <FontAwesomeIcon
                            className="w-6 p-2 mr-2"
                            icon={faUserGroup as IconProp}
                          />
                          <div className="flex flex-col w-full">
                            <span className={cx("title")}>Khớp hoàn toàn</span>
                            <span className="text-xs">
                              Nối mọi nhãn với mọi thành viên
                            </span>
                          </div>
                        </div>
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CForm>
              </div>
            </div>
          </CDropdownMenu>
        </CDropdown>

        {/* chia sẻ */}
        <CButton
          className="mx-2 h-8 "
          color="light"
          onClick={(e) => {
            setVisibleShare(!visibleShare);
            e.stopPropagation();
          }}
        >
          <div
            title="Chia sẻ bảng"
            className="flex items-center justify-center text-sm"
          >
            <FontAwesomeIcon icon={faUserPlus as IconProp} />
            <span className="pl-1">Chia sẻ</span>
          </div>
        </CButton>
        <CModal
          className={cx("modal-wrapper")}
          scrollable
          visible={visibleShare}
          onClose={() => {
            setVisibleShare(false);
          }}
          alignment="center"
        >
          <Modal />
        </CModal>

        {/* btn bar */}
        <CButton
          className={cx("work-btn") + " mx-2 h-8 text-white"}
          color="secondary"
          onClick={() => setVisibleBtnBar(true)}
        >
          <div className="flex items-center justify-center text-sm">
            <FontAwesomeIcon icon={faEllipsis as IconProp} />
          </div>
        </CButton>
        <COffcanvas
          scroll
          backdrop="static"
          placement="end"
          visible={visibleBtnBar}
          onHide={() => setVisibleBtnBar(false)}
        >
          <COffcanvasHeader className="py-0 flex items-center justify-center">
            <COffcanvasTitle className="text-black mx-auto pt-1">
              Menu
            </COffcanvasTitle>
            <CCloseButton
              title="Đóng Menu"
              className="text-reset"
              onClick={() => setVisibleBtnBar(false)}
            />
          </COffcanvasHeader>

          <hr className={cx("hr-header")} />

          <COffcanvasBody className="text-black">
            {DataContent.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                className={
                  cx("drop-item") +
                  " w-full whitespace-normal cursor-pointers py-1"
                }
              >
                <div className="flex items-center w-full">
                  <FontAwesomeIcon
                    className="w-6 p-2 mr-2 text-sm"
                    icon={data.icon}
                  />
                  <div className="flex flex-col w-full">
                    <span className={cx("title", "text-sm")}>{data.title}</span>
                    <span className="text-xs">{data.text}</span>
                  </div>
                </div>
              </CDropdownItem>
            ))}

            <hr className={cx("hr")} />

            <CDropdownItem
              className={
                cx("drop-item") +
                " w-full whitespace-normal cursor-pointers py-1"
              }
            >
              <div className="flex items-center w-full">
                <FontAwesomeIcon
                  className="w-6 p-2 mr-2 text-sm"
                  icon={faBoltLightning as IconProp}
                />
                <div className="flex flex-col w-full">
                  <span className={cx("title", "text-sm")}>Tự động hóa</span>
                  <span className="text-xs">
                    Tự động hóa các sther và hơn thế nữa...
                  </span>
                </div>
              </div>
            </CDropdownItem>

            <hr className={cx("hr")} />

            <CDropdownItem
              className={
                cx("drop-item") +
                " w-full whitespace-normal cursor-pointers py-1"
              }
            >
              <div className="flex items-center w-full">
                <FontAwesomeIcon
                  className="w-6 p-2 mr-2 text-sm"
                  icon={faRocket as IconProp}
                />
                <div className="flex flex-col w-full">
                  <span className={cx("title", "text-sm")}>
                    Tiện ích bổ sung
                  </span>
                  <span className="text-xs">
                    Google Drive và hơn thế nữa...
                  </span>
                </div>
              </div>
            </CDropdownItem>

            <hr className={cx("hr")} />

            {/*activity  */}
            <COffcanvasTitle className="text-black mx-auto">
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faAlignLeft as IconProp} />
                <span className="ml-2 text-sm">Hoạt động</span>
              </div>
            </COffcanvasTitle>
            {Notifi.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                className={
                  cx("drop-item") +
                  " w-full whitespace-normal cursor-pointers py-1"
                }
              >
                <div className="flex items-center w-full">
                  <FontAwesomeIcon
                    className="w-6 p-2 mr-2 text-sm"
                    icon={data.icon}
                  />
                  <div className="flex flex-col w-full">
                    <span className={cx("title", "text-sm")}>{data.title}</span>
                    <span className="text-xs">{data.text}</span>
                  </div>
                </div>
              </CDropdownItem>
            ))}
          </COffcanvasBody>
        </COffcanvas>
      </div>
    </div>
  );
}

export default ContentWork;
