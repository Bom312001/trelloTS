// import Board from '@lourenci/react-kanban';
// import { BoardWrapper } from '@lourenci/react-kanban/lib/styles';

// <reference path="trello.d.ts" />
import Board from "react-trello";
import { useState } from "react";
import { BoardData } from "../../../assets/data/BoardWork/BoardData";
import useLocalStorage from "../../../useLocalStorage/useLocalStorage";

function KanbanBoard() {
  const { getStorage, setStorage } = useLocalStorage();

  const [boardData, setBoardData] = useState(
    getStorage("listBoard") || setStorage("listBoard", BoardData)
  );

  // const [boardData, setBoardData] = useState( BoardData)
  // console.log(boardData);

  // Xử lý thêm cột
  const handleAddLane = (params: any) => {
    const newBoardData = {
      ...boardData,
      lanes: [
        ...boardData.lanes,
        { id: params.id, title: params.title, cards: [] },
      ],
    };
    setBoardData(newBoardData);
    setStorage("listBoard", newBoardData);
  };

  // xử lý xóa cột
  const handleDeleteLane = (laneId: any) => {
    const newBoardData = {
      ...boardData,
      lanes: boardData.lanes.filter((lane: any) => lane.id !== laneId),
    };
    setBoardData(newBoardData);
    setStorage("listBoard", newBoardData);
  };

  // Xử lý thêm thẻ
  const handleAddCard = (card: any, laneId: any) => {
    const newBoardData = {
      ...boardData,
      lanes: boardData.lanes.map((lane: any) =>
        lane.id === laneId ? { ...lane, cards: [...lane.cards, card] } : lane
      ),
    };
    setBoardData(newBoardData);
    setStorage("listBoard", newBoardData);
  };

  // xử lý xóa thẻ
  const handleDeleteCard = (cardId: any, laneId: any) => {
    const newBoardData = {
      ...boardData,
      lanes: boardData.lanes.map((lane: any) =>
        lane.id === laneId
          ? {
              ...lane,
              cards: lane.cards.filter((card: any) => card.id !== cardId),
            }
          : lane
      ),
    };
    setBoardData(newBoardData);
    setStorage("listBoard", newBoardData);
  };

  // thay đổi dữ liệu
  interface LanePosition {
    laneId: string;
    newPosition: number;
  }
  const handleChangeData = (params: any) => {
    // const newBoardData = {
    //   ...boardData,
    //   lanes: Array.from(boardData.lanes),
    // };
    // const [removedLane] = Array.from(
    //   newBoardData.lanes.splice(params.laneId, 1)
    // );
    // newBoardData.lanes.splice(params.newPosition, 0, removedLane);
    // setBoardData(newBoardData);
    // setStorage("listBoard", newBoardData);

    setBoardData(params);
    setStorage("listBoard", params);
    console.log(params);
  };

  return (
    <Board
      data={boardData}
      draggable
      editable
      editLaneTitle
      style={{
        backgroundColor: "transparent",
        height: "auto",
      }}
      laneStyle={{
        maxHeight: "500px",
        // overflowY: 'auto',
      }}
      canAddLanes
      onLaneAdd={handleAddLane}
      onLaneDelete={handleDeleteLane}
      onCardAdd={handleAddCard}
      onCardDelete={handleDeleteCard}
      onDataChange={handleChangeData}
    />
  );
}

export default KanbanBoard;
