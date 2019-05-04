import React from 'react';
import { connect } from 'react-redux';

const l = [{id: 123, name: 'milk', count: 1}, {id: 3424, name: 'coffe', count:2}];

export const List = ({ list=l }:any) => { // TODO
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
  list: state.list
})

export default connect(
  mapStateToProps
)(List);