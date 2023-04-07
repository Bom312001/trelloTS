// eslint-disable-next-line
import classNames from "classnames/bind";
import styles from "./Utility.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CButton, CImage } from "@coreui/react";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { UtilityContentItem } from "../../../assets/data/UtilityData/UtilityContent";
const cx = classNames.bind(styles);

function UtilityItem({
  image,
  title,
  avatar,
  text,
  ftNumber,
  ftText,
}: UtilityContentItem): JSX.Element {
  return (
    <div className="utility-item mb-1">
      <div className="max-w-[304px] flex flex-col w-full">
        <CImage src={image} className="h-[240px] w-full" />
        <div className="flex items-center my-2">
          <CImage src={avatar} className="rounded-full h-10 w-10 mr-2" />
          <span className={cx("utility-item__text")}>{title}</span>
        </div>
        <CButton size="sm">Thêm</CButton>
        <span className={cx("utility-item__text2") + " my-2"}>{text}</span>
        <div className="flex">
          <div className="mr-3">
            <FontAwesomeIcon icon={faTrello as IconProp} />
            {ftNumber}
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart as IconProp} />
            {ftText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilityItem;
