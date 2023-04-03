import {
  faBarsStaggered,
  faCalendarDays,
  faChartSimple,
  faGauge,
  faGripVertical,
  faLocationDot,
  faLock,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

interface LevelDataItem {
  id: Number;
  title: String;
  btn: any;
  icon: any;
  iconLock?: any;
  disabled?: boolean;
  cursor: string;
}

export const LevelData: LevelDataItem[] = [
  {
    id: 1,
    btn: faGripVertical,
    title: "Bảng",
    icon: faChartSimple,
    cursor: "cursor-pointer",
  },
  {
    id: 2,
    btn: faGripVertical,
    title: "Bảng",
    iconLock: faLock,
    icon: faTableList,
    disabled: true,
    cursor: "cursor-not-allowed",
  },
  {
    id: 3,
    btn: faGripVertical,
    title: "Lịch",
    iconLock: faLock,
    icon: faCalendarDays,
    disabled: true,
    cursor: "cursor-not-allowed",
  },
  {
    id: 4,
    btn: faGripVertical,
    title: "Lịch trình",
    iconLock: faLock,
    icon: faBarsStaggered,
    disabled: true,
    cursor: "cursor-not-allowed",
  },
  {
    id: 5,
    btn: faGripVertical,
    title: "Bảng điều khiển",
    iconLock: faLock,
    icon: faGauge,
    disabled: true,
    cursor: "cursor-not-allowed",
  },
  {
    id: 6,
    btn: faGripVertical,
    title: "Bản đồ",
    iconLock: faLock,
    icon: faLocationDot,
    disabled: true,
    cursor: "cursor-not-allowed",
  },
];
