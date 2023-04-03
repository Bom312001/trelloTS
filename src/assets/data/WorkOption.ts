import {
  IconGruopBlack,
  IconHeartBlack,
  IconSettingBlack,
  IconTrellBlack,
  IconSquartBlack,
  Props,
} from "../images/icon";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FC } from "react";


interface WorkItem {
  id: Number;
  title: String;
  path: String;
  icon: FC<Props>;
  btn?: any;
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: "Bảng",
    path: "/",
    icon: IconTrellBlack,
    // btn: ''
  },
  {
    id: 2,
    title: "Điểm nổi bật",
    path: "/",
    icon: IconHeartBlack,
    // btn: ''
  },
  {
    id: 3,
    title: "Hình",
    path: "/",
    icon: IconSquartBlack,
    btn: faChevronRight,
  },
  {
    id: 4,
    title: "Thành viên",
    path: "/",
    icon: IconGruopBlack,
    btn: faPlus,
  },
  {
    id: 5,
    title: "Cài đặt",
    path: "/",
    icon: IconSettingBlack,
    btn: faChevronRight,
  },
];
