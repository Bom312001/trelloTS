import { useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CImage,
  CModal,
  CModalHeader,
} from "@coreui/react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { dataForm } from "../../../../assets/data/DataForm";
import imgInfo from "../../../../assets/images/imgInfo.png";

const cx = classNames.bind(styles);

function Modal(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <CButton
        className="bg-transparent border-0 "
        onClick={(e) => {
          console.log("e", e);
          e.stopPropagation();
          setVisible(!visible);
        }}
      >
        <FontAwesomeIcon
          className="text-[#5e6c84] mt-1 p-1 rounded hover:bg-[#ccc]"
          icon={faPlus as IconProp}
        />
      </CButton>
      <CModal
        className={cx("modal-wrapper")}
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader className="border-0">
          {/* <CModalTitle>Modal title</CModalTitle> */}
        </CModalHeader>
        <div className={cx("custom-modal", "flex")}>
          <div
            className={cx(
              "modal-info",
              "flex",
              "items-center",
              "flex-col",
              "p-6",
              "mx-auto",
              "mb-4",
              "mt-16"
            )}
          >
            <CForm className="w-96 ml-16">
              <div className="text-2xl font-semibold mb-3">
                Hãy xây dựng một Không gian làm việc
              </div>
              <div className="mt-3 mb-8 mx-auto text-lg text-[#6B778C]">
                Tăng năng suất của bạn bằng cách giúp mọi người dễ dàng truy cập
                bảng ở một vị trí.
              </div>
              <CFormInput
                id="exampleFormControlInput1"
                label="Tên Không gian làm việc"
                placeholder="Công ty của Taco"
                text="Đây là tên của công ty, nhóm hoặc tổ chức của bạn."
              />
              <CFormSelect
                label="Loại Không gian làm việc"
                id="exampleFormControlSelect1"
                size="sm"
                className="mb-3"
                aria-label="Small select example"
              >
                {dataForm.map((data) => (
                  <option key={data.id.toString()} value={data.id.toString()}>
                    {data.title}
                  </option>
                ))}
              </CFormSelect>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                label="Mô tả Không gian làm việc"
                rows={5}
                text="Đưa các thành viên của bạn vào bảng với mô tả ngắn về Không gian làm việc của bạn."
              ></CFormTextarea>
              <CButton
                color="primary"
                type="submit"
                className="mt-3 w-full border-0 "
              >
                Tiếp tục
              </CButton>
            </CForm>
          </div>
          <div className={cx("modal-bg")}>
            <div className="w-80 h-64 mt-14">
              <CImage className="w-full h-full" src={imgInfo} />
            </div>
          </div>
        </div>
      </CModal>
    </div>
  );
}

export default Modal;
