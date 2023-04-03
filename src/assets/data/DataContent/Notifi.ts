import {
  faEarthAmericas,
  faLock,
  faRocket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

interface NotifiItem {
  id: Number;
  title: String;
  text: String;
  icon: any;
  disabled?: boolean;
}

export const Notifi: NotifiItem[] = [
  {
    id: 1,
    title: "Riêng tư",
    icon: faLock,
    text: "5 giờ trước",
  },
  {
    id: 2,
    title: "Không gian làm việc",
    icon: faUserGroup,
    text: "5 giờ trước",
  },
  {
    id: 3,
    title: "Tổ chức",
    icon: faRocket,
    text: "5 giờ trước",
    disabled: true,
  },
  {
    id: 4,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 5,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 6,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 7,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 8,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 9,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
  {
    id: 10,
    title: "Công khai",
    icon: faEarthAmericas,
    text: "5 giờ trước",
  },
];
