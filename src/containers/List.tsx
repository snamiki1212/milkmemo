import React from 'react';
import { connect } from 'react-redux';

export const List = ({ list = [] }:any) => { // TODO
  return(
    <ul>
      {list.map((memo:any) => // TODO
        <li key={memo.id}>
          <span>{memo.name}</span>
          {" | "}
          <span>{memo.count}</span>
        </li>
      )}
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.memoList
})

export default connect(
  mapStateToProps
)(List);