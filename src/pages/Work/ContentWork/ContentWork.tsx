import { useState } from "react";
import {
  CButton,
  CCloseButton,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CImage,
  CModal,
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
  const [visible, setVisible] = useState(true);
  const [visibleBtnBar, setVisibleBtnBar] = useState(false);

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
        <CDropdown>
          <CDropdownToggle className="bg-transparent border-0 w-full h-full">
            <div
              className=""
              title="Tất cả các thành viên của không gian làm việc có thể xem và sửa bảng này."
            >
              <FontAwesomeIcon
                className="text-sm"
                icon={faUserGroup as IconProp}
              />
              <span className="pl-1 text-sm">Không gian làm việc</span>
            </div>
          </CDropdownToggle>
          <CDropdownMenu className="mt-11 w-96 z-10">
            <CDropdownHeader>Khả năng xem</CDropdownHeader>
            {DataContent.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                disabled={data.disabled}
                className="w-full whitespace-normal cursor-pointer"
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
      <CDropdown>
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
          <CDropdownHeader>Nâng cấp cho chế độ xem</CDropdownHeader>
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
        <CDropdown>
          <CDropdownToggle className="bg-transparent p-0 border-0">
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
                <FontAwesomeIcon className="ml-4" icon={faClose as IconProp} />
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
            <CButton className="w-11/12 ml-4">Thêm tiện ích bổ sung</CButton>
          </CDropdownMenu>
        </CDropdown>

        <CDropdown>
          <CDropdownToggle className="bg-transparent p-0 border-0">
            <CButton
              title="Tự động hóa"
              className="mx-2 h-8 text-white"
              color="secondary"
            >
              <div className="flex items-center justify-center text-sm">
                <FontAwesomeIcon icon={faBoltLightning as IconProp} />
                <span className="pl-1">Tự động hóa</span>
              </div>
            </CButton>
          </CDropdownToggle>
          <CDropdownMenu className="mt-11 w-96 z-10">
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Tự động hóa</h3>
              <div>
                <FontAwesomeIcon className="ml-4" icon={faClose as IconProp} />
              </div>
            </div>
            {AutoMation.map((data) => (
              <CDropdownItem
                key={data.id.toString()}
                className="w-full whitespace-normal cursor-pointer"
              >
                <div className="flex items-center w-full ">
                  <FontAwesomeIcon
                    className="w-6 py-2 mr-2 text-sm"
                    icon={data.icon}
                  />
                  <span className={cx("title", "text-sm")}>{data.title}</span>
                </div>
                <div className="flex w-full">
                  <span className="text-xs">{data.text}</span>
                </div>
              </CDropdownItem>
            ))}
          </CDropdownMenu>
        </CDropdown>

        <CDropdown autoClose="outside">
          <CDropdownToggle className="bg-transparent p-0 border-0">
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
                <FontAwesomeIcon className="ml-4" icon={faClose as IconProp} />
              </div>
            </div>
            <div className={cx("menu-filter__item")}>
              <div className="text-sm my-1">
                <CFormInput
                  label="Từ khóa"
                  placeholder="Nhập từ khóa..."
                  text="Tìm kiếm các thẻ, các thành viên, các nhãn và hơn thế nữa."
                />
              </div>
              <div>
                <span>Thành viên</span>
                <CFormCheck id="flexCheckDefault" label="Không có thành viên" />
                <CFormCheck
                  id="flexCheckChecked"
                  label="Các thẻ đã chỉ định cho tôi"
                />
              </div>
              <div>
                <span>Ngày hết hạn</span>
                <CFormCheck
                  id="flexCheckDefault"
                  label="Không có ngày hết hạn"
                />
                <CFormCheck id="flexCheckChecked" label="Quá hạn" />
                <CFormCheck
                  id="flexCheckDefault"
                  label="Sẽ hết hạn vào ngày mai"
                />
                <CFormCheck
                  id="flexCheckChecked"
                  label="Sẽ hết hạn vào tuần sau"
                />
                <CFormCheck
                  id="flexCheckDefault"
                  label="Sẽ hết hạn vào tháng sau"
                />
                <CFormCheck
                  id="flexCheckChecked"
                  label="Đã đánh dấu hoàn thành"
                />
                <CFormCheck
                  id="flexCheckChecked"
                  label="Không được đánh dấu là đã hoàn thành"
                />
              </div>
              <div>
                <span>Nhãn</span>
                <CFormCheck id="flexCheckDefault" label="Không có nhãn" />
                <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
                <CFormCheck id="flexCheckDefault" label="Default checkbox" />
                <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
                <CFormCheck id="flexCheckDefault" label="Chọn nhãn" />
              </div>
              <hr />
              <div>
                <CDropdown>
                  <CDropdownToggle href="#" color="light">
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </div>
          </CDropdownMenu>
        </CDropdown>

        {/* chia sẻ */}
        <CButton
          className="mx-2 h-8 "
          color="light"
          onClick={(e) => {
            setVisible(!visible);
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
          visible={visible}
          onClose={() => {
            setVisible(false);
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
