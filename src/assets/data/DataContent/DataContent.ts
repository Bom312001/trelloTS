import {
  faEarthAmericas,
  faLock,
  faRocket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

interface DataContentItem {
  id: Number;
  title: String;
  header: String;
  text: String;
  icon: any;
  disabled?: boolean;
}

export const DataContent: DataContentItem[] = [
  {
    id: 1,
    title: "Riêng tư",
    header: "Riêng tư",
    icon: faLock,
    text: "Chỉ có các thành viên nhóm mới có thể xem và sửa bảng này",
  },
  {
    id: 2,
    title: "Không gian làm việc",
    header: "Hiển thị trong Không gian làm việc",
    icon: faUserGroup,
    text: "Tất cả các thành viên của Không gian làm việc có thể xem và sửa bảng này",
  },
  {
    id: 3,
    title: "Tổ chức",
    header: "Tổ chức",
    icon: faRocket,
    text: "Tất cả các thành viên của tổ chức có thể xem bảng này. Bảng cần được thêm vào Không gian làm việc doanh nghiệp để kích hoạt chức năng này.",
    disabled: true,
  },
  {
    id: 4,
    title: "Công khai",
    header: "Công khai",
    icon: faEarthAmericas,
    text: "Tất cả các thành viên của Không gian làm việc có thể xem và sửa bảng này",
  },
];
