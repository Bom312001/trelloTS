import img1 from "../../images/ImageUtility/img1.jpg";
import img2 from "../../images/ImageUtility/img2.jpg";
import img3 from "../../images/ImageUtility/img3.svg";

import avatar1 from "../../images/ImageUtility/img1.jpg";
import avatar2 from "../../images/ImageUtility/img2.jpg";
import avatar3 from "../../images/ImageUtility/img3.svg";

export interface UtilityContentItem {
  id?: Number;
  title: String;
  text: String;
  image: any;
  avatar: any;
  ftNumber?: string;
  ftText?: string;
}

export const UtilityContent: UtilityContentItem[] = [
  {
    id: 1,
    image: img1,
    avatar: avatar1,
    title: "Lặp lại thẻ",
    text: "Tự động sao chép các thẻ Trello cho các tác vụ lặp đi lặp lại để tiết kiệm thời gian và đưa quy trình vào quy trình làm việc của bạn.",
    ftNumber: "500,000+",
    ftText: "Chọn nhân viên",
  },
  {
    id: 2,
    image: img2,
    avatar: avatar2,
    title: "Slack",
    text: "Kết nối các ứng dụng liên lạc và cộng tác của bạn để không bị lọt các ý tưởng hay nhiệm vụ.",
  },
  {
    id: 3,
    image: img3,
    avatar: avatar3,
    title: "Placker",
    text: "Mirror & Sync cards across boards. Winner Atlassian codegeist, best app for remote working.",
  },
  {
    id: 4,
    image: img2,
    avatar: avatar1,
    title: "Timeline",
    text: "Resource planning, time tracking, multi-board view, swimlanes, recurring tasks, dependencies, Gantt chart timeline, Google calendar",
  },
];
