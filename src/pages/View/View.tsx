// eslint-disable-next-line
// import BoardWork from './BoardWork/BoardWork';
import { Route, Routes } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./View.module.scss";
import SidebarView from "./SidebarWork/SidebarView";
import HeaderView from "./HeaderView/HeaderView";
import ViewTable from "./ViewTable/ViewTable";

const cx = classNames.bind(styles);

function View() {
  return (
    <div className={cx("wrapper")}>
      <SidebarView />
      <div className={cx("view-body") + " relative"}>
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <div className={cx("content", "flex flex-col h-full")}>
            <HeaderView />
            <div className="flex-1 overflow-y-auto ">
              <div className={cx("table", "p-4")}>
                {/* overflow:hidden */}
                <div className="sticky top-0 z-10">
                  <ViewTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
