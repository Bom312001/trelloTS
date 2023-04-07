import { faDashcube, faTrello } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faClock,
  faHandSparkles,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

interface ButlerItem {
  id: Number;
  title: String;
  icon: any;
}

export const ButlerSidbar: ButlerItem[] = [
  {
    id: 1,
    title: " Automation Tips ",
    icon: faHandSparkles,
  },
  {
    id: 2,
    title: "Rules",
    icon: faDashcube,
  },
  {
    id: 3,
    title: "Card Button",
    icon: faTableColumns,
  },
  {
    id: 4,
    title: "Board Button",
    icon: faTrello,
  },
  {
    id: 5,
    title: " Scheduled ",
    icon: faCalendarDay,
  },
  {
    id: 6,
    title: "Due Date",
    icon: faClock,
  },
];
