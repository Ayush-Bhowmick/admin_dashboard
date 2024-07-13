import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: '1',
      title: 'To Do',
      cards: [{ id: '1', title: 'Task 1', description: 'Do something' }],
    },
    {
      id: '2',
      title: 'In Progress',
      cards: [{ id: '2', title: 'Task 2', description: 'Do something else' }],
    },
    {
      id: '3',
      title: 'Done',
      cards: [{ id: '3', title: 'Task 3', description: 'Task complete' }],
    },
  ],
};

const KanbanBoard = () => {
  return <Board data={data} draggable />;
};

export default KanbanBoard;
