import React from 'react'

import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({sectionName,icon,tasks,status,handleDelete}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img src={icon} className='task_column_icon'/>
            {sectionName}
        </h2>

        {
          tasks.map(
            (item, index) => 
              item.status === status && (
                <TaskCard 
                  key={index} 
                  title={item.task}
                  tags={item.tags}
                  handleDelete={handleDelete}
                  index={index}
                /> 
              )
        )}
    </section>
  )
}

export default TaskColumn