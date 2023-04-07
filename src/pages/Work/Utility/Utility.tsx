// eslint-disable-next-line
import classNames from "classnames/bind";
import styles from "./Utility.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import { CFormInput } from "@coreui/react";
import SidebarUtility from "./SidebarUtility/SidebarUtility";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { UtilityContent } from "../../../assets/data/UtilityData/UtilityContent";
import UtilityItem from "./UtilityItem";
import { NavLink } from "react-router-dom";
import routes from "../../../config/routes";

const cx = classNames.bind(styles);

function Utility() {
  return (
    <div className={cx("wrapper")}>
      <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
        <h3 className="py-2 text-xl mx-auto">Tiện ích bổ sung</h3>
        <div>
          <NavLink to={routes.works}>
            <FontAwesomeIcon className="ml-4" icon={faClose as IconProp} />
          </NavLink>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("utility-container") + " flex justify-center mx-14"}>
          <div className={cx("utility-sidebar")}>
            <div className="mb-2">
              <CFormInput placeholder="Tìm kiếm" />
            </div>
            <SidebarUtility />
          </div>
          <div className={cx("utility-content")}>
            <div className="mx-auto grow px-4">
              <div className="w-[625px] text-xl font-semibold my-2">
                Tiện ích nổi bật
              </div>
              <div className="max-w-[625px] flex justify-center flex-wrap gap-3">
                {UtilityContent.map((data) => (
                  <UtilityItem
                    //   key={data.id.toString()}
                    text={data.text}
                    title={data.title}
                    image={data.image}
                    avatar={data.avatar}
                    ftNumber={data.ftNumber}
                    ftText={data.ftText}
                  />
                ))}
                {/* {UtilityContent.map((data) => (
                  <UtilityItem
                    // key={data.id.toString()}
                    text={data.text}
                    title={data.title}
                    image={data.image}
                    avatar={data.avatar}
                    ftNumber={data.ftNumber}
                    ftText={data.ftText}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
