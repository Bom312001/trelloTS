// eslint-disable-next-line
import classNames from "classnames/bind";
// import BoardWork from './BoardWork/BoardWork';
import ContentWork from "./ContentWork/ContentWork";
import SidebarWork from "./SidebarWork";
import styles from "./Work.module.scss";
import "./GlobalStyleWork.scss";
import KanbanBoard from "../Work/KanbanBoard/KanbanBoard";

const cx = classNames.bind(styles);

function Work() {
  return (
    <div className={cx("wrapper")}>
      <SidebarWork />
      <div className={cx("board") + " flex-1 ml-10"}>
        <div className="shrink-0 text-white">
          <ContentWork />
        </div>
        <div className="grow flex cursor-pointer">
          {/* <BoardWork /> */}
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
}

export default Work;
