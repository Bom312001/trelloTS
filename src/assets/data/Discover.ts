import {
  IconConflu,
  IconAlat,
  IconJira2,
  IconJira1,
  Props,
} from "../images/icon";
import { FC } from "react";

interface DataItem {
  id: Number;
  title: String;
  text?: String;
  icon: FC<Props>;
}

export const discoverData: DataItem[] = [
  {
    id: 1,
    title: "Confluence",
    text: "Cộng tác tài liệu",
    icon: IconConflu,
  },
  {
    id: 2,
    title: "Jira Sofware",
    text: "Theo dõi dự án và lỗi",
    icon: IconJira1,
  },
  {
    id: 3,
    title: "Jira Service Management",
    text: "Quản lý dịch vụ CNTT cộng tác",
    icon: IconJira2,
  },
  {
    id: 4,
    title: "Sản phẩm khác của Altassian",
    icon: IconAlat,
  },
];
