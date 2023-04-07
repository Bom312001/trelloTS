// eslint-disable-next-line
// import BoardWork from './BoardWork/BoardWork';
import { Route, Routes } from "react-router-dom";
import ContentWork from "./ContentWork/ContentWork";
import SidebarWork from "./SidebarWork";
import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import "./GlobalStyleWork.scss";
import KanbanBoard from "../Work/KanbanBoard/KanbanBoard";
import routes from "../../config/routes";
import Utility from "./Utility/Utility";
import Butler from "./Butler/Butler";

const cx = classNames.bind(styles);

function Work() {
  return (
    <div className={cx("wrapper")}>
      <SidebarWork />
      <div className={cx("board") + " flex-1 ml-10"}>
        <div className="shrink-0 text-white">
          <ContentWork />
        </div>
        <div className="grow flex">
          <Routes>
            <Route path="/*" element={<KanbanBoard />} />
            <Route path="/utility" element={<Utility />} />
            <Route path="/butler" element={<Butler />} />
          </Routes>
          {/* <KanbanBoard /> */}
        </div>
      </div>
    </div>
  );
}

export default Work;
