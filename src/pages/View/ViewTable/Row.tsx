import classNames from "classnames/bind";
import styles from "./ViewTable.module.scss";

import {
  CAvatar,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CImage,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import bgWork from "../../../assets/images/bgWork.jpg";
import { BoardData } from "../../../assets/data/BoardWork/BoardData";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCheck,
  faChevronDown,
  faClose,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import imgavatar from "../../../assets/images/mu.png";
import {
  ListTileData,
  TitleData,
} from "../../../assets/data/ViewData/ViewTable";

const cx = classNames.bind(styles);
function Row({ item }: any) {
  const [showListMember, setShowListMember] = useState(true);

  // const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [idDropDown, setIdDropDown] = useState(0);
  // console.log("idDropDown", idDropDown);
  const [idDropLabel, setIdDropLabel] = useState(0);
  const [idDropMember, setIdDropMember] = useState(0);
  const [idDropList, setIdDropList] = useState(0);
  const [idDropTable, setIdDropTable] = useState(0);

  // const [currentTitle, setCurrentTitle] = useState(
  //   TitleData.cards.map((card) => card.titleList)
  // );
  return (
    <CTableRow>
      <CTableDataCell
        key={item.id.toString()}
        scope="row"
        className={cx("cell-card", "w-64 hover:bg-[#f1f2f4]")}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CImage className="w-8 h-5 rounded-sm mr-2" src={bgWork} />
            <span className="text-sm">{item.title}</span>
          </div>
          <CDropdown
            visible={Number(item.id) === idDropDown}
            onShow={() => {
              setIdDropDown(Number(item.id));
            }}
            onHide={() => {
              setIdDropDown(0);
              console.log("on Hide");
            }}
            autoClose="outside"
          >
            <CDropdownToggle className="bg-transparent p-0 border-0 ">
              <FontAwesomeIcon
                className={cx(
                  "cell-card__icon",
                  "text-sm p-1 hover:bg-slate-300 rounded-sm"
                )}
                icon={faPen as IconProp}
              />
            </CDropdownToggle>
            <CDropdownMenu>
              <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
                <h3 className="ml-3 text-sm mx-auto">Thay đổi tiêu đề</h3>
                <div>
                  <FontAwesomeIcon
                    className="ml-4 cursor-pointer hover:bg-slate-400"
                    icon={faClose as IconProp}
                    onClick={() => {
                      setIdDropDown(0);
                      // console.log(isOpenEdit);
                    }}
                  />
                </div>
              </div>
              <div>
                <CFormTextarea></CFormTextarea>
              </div>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </CTableDataCell>
      {/* list */}
      <CTableDataCell className={cx("cell-list", "w-44 hover:bg-[#f1f2f4]")}>
        <div className="flex justify-between items-center">
          <span className="text-sm">
            {item.titleList}
            {/* {item.id} */}
          </span>
          <CDropdown
            visible={Number(item.id) === idDropList}
            onShow={() => {
              setIdDropList(Number(item.id));
              // console.log(data.title);
            }}
            onHide={() => {
              setIdDropList(0);
            }}
            autoClose="outside"
          >
            <CDropdownToggle className="bg-transparent p-0 border-0 ">
              <FontAwesomeIcon
                className={cx("cell-list__icon", "text-black")}
                icon={faChevronDown as IconProp}
              />
            </CDropdownToggle>
            <CDropdownMenu className={cx("menu-member") + " mt-11 w-96 z-10"}>
              <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
                <h3 className="ml-3 text-sm mx-auto">Thay đổi danh sách</h3>
                <div>
                  <FontAwesomeIcon
                    className="ml-4 p-1"
                    icon={faClose as IconProp}
                    onClick={() => setIdDropList(0)}
                  />
                </div>
              </div>
              <div className={cx("menu-member__item", "p-0")}>
                <div className="text-sm my-1 px-4">
                  <CFormInput placeholder="Tìm kiếm các danh sách" />
                </div>
                <div className="w-full">
                  {ListTileData.lanes.map((dataItem) => (
                    <CDropdownItem
                      className="mb-2 py-1 overflow-hidden text-ellipsis whitespace-nowrap w-full"
                      onClick={() => {
                        console.log(dataItem.title);
                        item.titleList = dataItem.title;
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                          {dataItem.title}
                          {/* {dataItem.id} */}
                        </div>
                        {item.userIDd === dataItem.id && (
                          <FontAwesomeIcon icon={faCheck as IconProp} />
                        )}
                      </div>
                    </CDropdownItem>
                  ))}
                </div>
              </div>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </CTableDataCell>

      {/*label  */}
      <CTableDataCell className={cx("cell-label")}>
        <span className={cx("cell-label__dost")}>.</span>
        <CDropdown
          visible={Number(item.id) === idDropLabel}
          onShow={() => {
            setIdDropLabel(Number(item.id));
          }}
          onHide={() => {
            setIdDropLabel(0);
          }}
          autoClose="outside"
        >
          <CDropdownToggle className="bg-transparent p-0 border-0 ">
            <FontAwesomeIcon
              className={cx("cell-label__icon", "mt-1", "text-black")}
              icon={faPlus as IconProp}
            />
          </CDropdownToggle>
          <CDropdownMenu className={cx("menu-label") + " mt-11 w-96 z-10"}>
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Lọc</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4"
                  icon={faClose as IconProp}
                  onClick={() => setIdDropLabel(0)}
                />
              </div>
            </div>
            <div className={cx("menu-label__item")}>
              <div className="text-sm my-1">
                <CFormInput placeholder="Tìm nhãn..." />
              </div>

              <div>
                <span className="text-[#5e6c84] font-semibold">Nhãn</span>
                <CFormCheck id="flexCheckColor" label="Không có nhãn" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Checked checkbox" />
                <CFormCheck id="flexCheckColor" label="Chọn nhãn" />
              </div>
              <CButton color="light" className="w-full border-0">
                <span className="text-sm">Tạo nhãn mới</span>
              </CButton>
              <hr />
              <CButton color="light" className="w-full border-0 px-0">
                <span className="text-sm">
                  Bật chế độ thân thiện với người mù màu
                </span>
              </CButton>
              <CButton
                color="light"
                className="w-full border-0 flex items-center mt-2"
              >
                <FontAwesomeIcon icon={faBullhorn as IconProp} />
                <span className="text-sm ml-2">Gửi phản hồi cho chúng tôi</span>
              </CButton>
            </div>
          </CDropdownMenu>
        </CDropdown>
      </CTableDataCell>

      {/* member */}
      <CTableDataCell className={cx("cell-label")}>
        <span className={cx("cell-label__dost")}>.</span>
        <CDropdown
          visible={Number(item.id) === idDropMember}
          onShow={() => {
            setIdDropMember(Number(item.id));
            setShowListMember(true);
          }}
          onHide={() => {
            setIdDropMember(0);
          }}
          autoClose="outside"
        >
          <CDropdownToggle className="bg-transparent p-0 border-0 ">
            <FontAwesomeIcon
              className={cx("cell-label__icon", "mt-1 text-black")}
              icon={faPlus as IconProp}
            />
          </CDropdownToggle>
          <CDropdownMenu className={cx("menu-member") + " mt-11 w-96 z-10"}>
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Thành viên</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4 p-1"
                  icon={faClose as IconProp}
                  onClick={() => setIdDropMember(0)}
                />
              </div>
            </div>
            <div className={cx("menu-member__item")}>
              <div className="text-sm my-1">
                <CFormInput placeholder="Tìm kiếm các thành viên" />
              </div>
              <div>
                <span className="text-[#5e6c84] text-xs font-semibold">
                  Thành viên của bảng
                </span>
                <CDropdownItem className="mb-2 rounded overflow-hidden text-ellipsis whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <CAvatar src={imgavatar} />
                    <div className="text-sm ml-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Nguyễn Xuân Tuấn Anh asssssssssssssssssssssssssfasfascsa
                    </div>
                  </div>
                </CDropdownItem>
              </div>
              {showListMember ? (
                <CButton
                  color="light"
                  className="w-full border-0"
                  onClick={() => setShowListMember(false)}
                >
                  <span className="text-sm">
                    Hiển thị các thành viên khác trong Không gian làm việc
                  </span>
                </CButton>
              ) : (
                <div className="mt-2">
                  <span className="text-xs font-semibold text-[#5e6c84]">
                    Các thành viên Không gian làm việc
                  </span>
                  <div className="p-4 mt-1 rounded bg-[#091e420a] text-center">
                    Không có kết quả
                  </div>
                </div>
              )}
            </div>
          </CDropdownMenu>
        </CDropdown>
      </CTableDataCell>

      {/* date */}
      <CTableDataCell className={cx("cell-label")}>
        <span className={cx("cell-label__dost")}>.</span>
        <CDropdown
          visible={Number(item.id) === idDropTable}
          onShow={() => {
            setIdDropTable(Number(item.id));
          }}
          onHide={() => {
            setIdDropTable(0);
          }}
          autoClose="outside"
        >
          <CDropdownToggle className="bg-transparent p-0 border-0 ">
            <FontAwesomeIcon
              className={cx("cell-label__icon", "mt-1")}
              icon={faPlus as IconProp}
            />
          </CDropdownToggle>
          <CDropdownMenu className={cx("menu-label") + " mt-11 w-96 z-10"}>
            <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
              <h3 className="ml-3 text-sm mx-auto">Thay đổi ngày hết hạn</h3>
              <div>
                <FontAwesomeIcon
                  className="ml-4 p-1"
                  icon={faClose as IconProp}
                  onClick={() => setIdDropTable(0)}
                />
              </div>
            </div>
          </CDropdownMenu>
        </CDropdown>
      </CTableDataCell>
    </CTableRow>
  );
}

export default Row;
