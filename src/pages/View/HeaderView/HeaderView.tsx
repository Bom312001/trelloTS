/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import styles from "./HeaderView.module.scss";
import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormInput,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  faChevronDown,
  faClose,
  faFilter,
  faLock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function HeaderView() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("Khớp bất kỳ");
  return (
    <div className={cx("wrapper", "p-4 flex justify-between items-center")}>
      <div className="text-xl leading-5 font-semibold text-[#44546F] ml-1">
        Bảng
      </div>
      <div>
        <CButton className="bg-transparent  border-0 ">
          <a href="#" className="text-xs no-underline hover:underline">
            Gửi phản hồi cho chúng tôi!
          </a>
        </CButton>

        <CButton className="h-8">
          <div className="item-center text-sm h-full">
            Lưu dưới dạng chế độ xem mới
          </div>
        </CButton>

        {/* filter */}
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
      </div>
    </div>
  );
}

export default HeaderView;
