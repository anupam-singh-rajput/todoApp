import React,{useState} from 'react'

import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {

    const [taskData, setTaskData] = useState({
        task:"",
        status:"todo",
        tags: [],
    });


    const handleChange = (e) =>{
        const name = e.target.name; //this will give the name of the html tags such as name input is task, select is status;
        const value = e.target.value;  //this will give the value of that element  
        
        setTaskData((prev)=>{
            return  {...prev, [name] : value, }
        })
    }

    const selectTag = (tag) =>{
       if(taskData.tags.some(item => item === tag)){
            const filteredTags = taskData.tags.filter(item => item !== tag);
            setTaskData((prev)=>{
                return  {...prev, tags : filteredTags}
            })
       } else {
            setTaskData((prev)=>{
                return  {...prev, tags : [...prev.tags,tag]}
            })
       }
    }

    const checkTag = (tag) =>{
        return  taskData.tags.some(item => item === tag);
    }

    const AddTask=(e)=>{
        e.preventDefault();
        setTasks((prev)=>{
            return [...prev,taskData];
        })

        setTaskData({
            task:"",
            status:"todo",
            tags: [],
        })
    }

  return (
    <header className='app_header'>
        <form onSubmit={AddTask}>
            <input type='text' 
            name="task"
            className='task_input' 
            placeholder='Enter your task'
            value={taskData.task}
            onChange={handleChange}/>

            <div className="task_form_bottom_line">
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS"  selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                    <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                </div>

                <div>
                    <select className='task_status' name="status" value={taskData.status} onChange={handleChange}>
                        <option value='todo'>To do</option>
                        <option value='doing'>Doing</option>
                        <option value='done'>Done</option>
                    </select>
                    <button type='submit' className='task_submit'>
                        + Add Task
                    </button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm