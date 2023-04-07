export interface ListTitleDataItem {
  lanes: {
    id: number;
    title: string;
  }[];
}

export interface TitleDataItem {
  cards: {
    id: number;
    userIDd: number;
    title: string;
    description: string;
    titleList: string;
  }[];
}

export const TitleData: TitleDataItem = {
  cards: [
    {
      id: 1,
      userIDd: 1,
      title: "Card title 1",
      titleList: "Backlog",
      description: "Card content",
    },
    {
      id: 2,
      userIDd: 1,
      title: "Card title 2",
      titleList: "Backlog",
      description: "Card content",
    },
    {
      id: 3,
      userIDd: 1,
      title: "Card title 3",
      titleList: "Backlog",

      description: "Card content",
    },
    {
      id: 9,
      userIDd: 2,
      title: "Card title 9",
      titleList: "Doing",

      description: "Card content",
    },
    {
      id: 10,
      userIDd: 2,
      title: "Card title 10",
      titleList: "Doing",
      description: "Card content",
    },
    {
      id: 12,
      userIDd: 3,
      title: "Card title 12",
      titleList: "Q&A",
      description: "Card content",
    },
    {
      id: 13,
      userIDd: 3,
      title: "Card title 13",
      titleList: "Q&A",
      description: "Card content",
    },
    {
      id: 15,
      userIDd: 4,
      title: "Card title 15",
      titleList: "Production",
      description: "Card content",
    },
  ],
};

export const ListTileData: ListTitleDataItem = {
  lanes: [
    {
      id: 1,
      title: "Backlog",
    },
    {
      id: 2,
      title: "Doing",
    },
    {
      id: 3,
      title: "Q&A",
    },
    {
      id: 4,
      title: "Production",
    },
  ],
};
