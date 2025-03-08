import React from 'react'

const List = ({todoArray,onDeleteClicked,onChecked}) => {
  return (
    <>
      {
      todoArray && todoArray.length>0 && todoArray.map(
        item => (
          <div className='list' key={item.id}>
            <div className='inp'>
                <input type='checkbox' checked={item.isCompleted} onClick={()=> onChecked(item.id)} disabled={item.isCompleted}/>
                <span className={item.isCompleted ? `strike-through` : ``}>
                  {item.todo}
                </span>
            </div>
            <span className="material-icons-outlined" onClick={()=>onDeleteClicked(item.id)}>
                delete
            </span>
          </div>
        )
      )
    }
    </>
  )
}

export default List;