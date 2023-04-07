// eslint-disable-next-line
import classNames from "classnames/bind";
import styles from "./Butler.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { CFormInput } from "@coreui/react";
import SidebarButler from "./SidebarButler/SidebarButler";
import { NavLink } from "react-router-dom";
import routes from "../../../config/routes";

const cx = classNames.bind(styles);

function Butler() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("body", "h-full")}>
        <div className={cx("butler-container", " flex h-full")}>
          <div
            className={cx(
              "butler-sidebar",
              "max-w-[200px] h-full bg-[#f2f3f6]"
            )}
          >
            <SidebarButler />
          </div>
          <div className={cx("butler-content", "relative")}>
            Content
            {/* <div className="flex flex-row items-center justify-between mx-2 border-b border-solid border-[rgba(9, 30, 66, 0.13)]">
        <h3 className="py-2 text-xl mx-auto">Tiện ích bổ sung</h3>
        <div>
          <NavLink to={routes.works}>
            <FontAwesomeIcon className="ml-4" icon={faClose as IconProp} />
          </NavLink>
        </div>
      </div> */}
          </div>
          <NavLink
            to={routes.works}
            className="absolute text-black top-32 right-14 px-2"
          >
            <FontAwesomeIcon icon={faClose as IconProp} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Butler;
