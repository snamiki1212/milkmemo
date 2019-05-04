import React from 'react';

const l = [{id: 123, name: 'milk', count: 1}, {id: 3424, name: 'coffe', count:2}];

export const List = () => {
  const list = l
  return(
    <ul>
      {list.map(memo =>
        <li key={memo.id}>
          <span>{memo.name}</span>
          {" | "}
          <span>{memo.count}</span>
        </li>
      )}
    </ul>
  )
}

export default List;