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
import Row from "./Row";

const cx = classNames.bind(styles);

function ViewTable() {
  const [showListMember, setShowListMember] = useState(true);

  // const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [idDropDown, setIdDropDown] = useState(0);
  // console.log("idDropDown", idDropDown);
  const [idDropLabel, setIdDropLabel] = useState(0);
  const [idDropMember, setIdDropMember] = useState(0);
  const [idDropList, setIdDropList] = useState(0);
  const [idDropTable, setIdDropTable] = useState(0);

  const [boardData, setBoardData] = useState(BoardData);

  // const [currentTitle, setCurrentTitle] = useState(
  //   TitleData.cards.map((card) => card.titleList)
  // );

  return (
    <div className={cx("wrapper")}>
      <CTable className="cursor-pointer">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Thẻ</CTableHeaderCell>
            <CTableHeaderCell scope="col">Danh sách</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nhãn</CTableHeaderCell>
            <CTableHeaderCell scope="col">Thành viên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ngày hết hạn</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {TitleData.cards.map((item) => (
            <Row item={item} />
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}

export default ViewTable;
