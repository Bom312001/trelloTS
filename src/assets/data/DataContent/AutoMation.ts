import {
  faBullhorn,
  faEnvelope,
  faSliders,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

interface AutoMationItem {
  id: Number;
  title: String;
  text: String;
  icon: any;
}

export const AutoMation: AutoMationItem[] = [
  {
    id: 1,
    title: "Quy tắc",
    icon: faSliders,
    text: "Tạo các quy tắc tự động phản hồi các thao tác, lịch hoặc ngày đến hạn của thẻ.",
  },
  {
    id: 2,
    title: "Các nút",
    icon: faWallet,
    text: "Tạo các nút tùy chỉnh ở mặt sau của mỗi thẻ hoặc ở đầu bảng.",
  },
  {
    id: 3,
    title: "Báo cáo email",
    icon: faEnvelope,
    text: "Thiết lập báo cáo qua email, chẳng hạn như bản tóm tắt hàng tuần về tất cả các thẻ đến hạn trong vòng 7 ngày.",
  },
  {
    id: 4,
    title: "Gửi phản hồi",
    icon: faBullhorn,
    text: "Giúp chúng tôi cải thiện tự động hóa của bạn.",
  },
];
