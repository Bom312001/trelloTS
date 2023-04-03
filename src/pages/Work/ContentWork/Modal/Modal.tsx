import { useState } from "react";
import {
  CButton,
  CFormInput,
  CImage,
  CModalBody,
  CModalHeader,
} from "@coreui/react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faLink } from "@fortawesome/free-solid-svg-icons";
import imgMu from "../../../../assets/images/mu.png";

const cx = classNames.bind(styles);

function Modal() {
  const [toggleLink, setToggleLink] = useState(false);
  const handleToggle = () => {
    setToggleLink(!toggleLink);
  };

  return (
    <div className={cx("wrapper")}>
      <CModalHeader className="border-0 text-lg">Chia sẻ bảng</CModalHeader>
      <CModalBody className="flex justify-between items-center ">
        <CFormInput placeholder="Địa chỉ email hoặc tên" className="max-w-sm" />
        <div className="flex items-center">
          <CButton
            color="light"
            className="flex items-center justify-center h-10 py-1 px-2 mr-2"
          >
            <span className="text-sm h-full mr-1">Thành viên</span>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </CButton>
          <CButton className="h-10 py-1 px-2">Chia sẻ</CButton>
        </div>
      </CModalBody>

      <div className={cx("footer-modal") + " px-3 py-3"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#EBECF0] flex items-center py-1 rounded mr-3">
              <FontAwesomeIcon
                icon={faLink as IconProp}
                className="w-6 h-6 px-1"
              />
            </div>
            <div className="flex flex-col flex-1">
              {!toggleLink ? (
                <span className="text-sm ">Chia sẻ bảng này bằng liên kết</span>
              ) : (
                <span className="text-sm ">
                  Bất cứ ai có liên kết chia sẻ bảng
                </span>
              )}

              {!toggleLink ? (
                <span
                  className="text-xs normal-case font-normal underline cursor-pointer"
                  onClick={handleToggle}
                >
                  Tạo liên kết
                </span>
              ) : (
                <span className="text-xs normal-case font-normal underline cursor-pointer">
                  Sao chép liên kết
                </span>
              )}
            </div>
          </div>
          {toggleLink && (
            <CButton
              color="light"
              size="sm"
              className="border-0"
              onClick={handleToggle}
            >
              Tắt liên kết
            </CButton>
          )}
        </div>
      </div>

      <div className={cx("footer-modal") + " px-3 py-3"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CImage src={imgMu} className="rounded-full mr-2" />
            <div className="flex flex-col flex-1">
              <span className="text-sm ">Tuấn Anh Nguyễn Xuân (bạn)</span>
              <span className="text-xs normal-case font-normal">
                tuananh0301tb@gmail.com
              </span>
            </div>
          </div>
          <CButton
            color="light"
            className="flex items-center justify-center h-10 py-1 px-2 mr-2"
          >
            <span className="text-sm h-full mr-1">Quản trị viên</span>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </CButton>
        </div>
      </div>
    </div>
  );
}

export default Modal;
