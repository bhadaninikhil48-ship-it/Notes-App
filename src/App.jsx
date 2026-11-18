import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask)
    
    setTitle("")
    setDetails("")

  }

  const deleteNote = (idx) =>{
    
    const copyTask = [...task]
    
    copyTask.splice(idx,1)
    setTask(copyTask)
  }



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}

        className='flex items-start flex-col gap-4 p-10 lg:w-1/2'

      >

        <h1 className='text-3xl'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}

          className='px-5 py-2 w-full border-2 font-medium rounded outline-none'
        />

        <textarea
          type="text"
          placeholder='Enter details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          className='px-5 py-2 border-2 font-medium  rounded h-35 w-full outline-none'
        ></textarea>

        <button 
        className='bg-white font-medium  text-black px-5 py-2 rounded w-full'>Submit</button>
      </form>

      <div className='p-10 lg:border-l-2 lg:w-1/2'>

        <h1 className='text-3xl'>Your Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='h-52 w-40 py-7 px-4 rounded-xl  bg-cover bg-[url("https://i.pinimg.com/236x/e3/66/0a/e3660a0e03fff9476a0522d9c94deed1.jpg")]'>
              <div>
              <h3 className='leading-tight text-l font-bold text-[#967136]'>{elem.title}</h3>
              <p className='mt-2 text-xs leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>

              <button onClick={()=>{
                deleteNote(idx)
              }}
               className=' w-full rounded-xl py-1 text-xs font-bold cursor-pointer active:scale-95 bg-red-500 mt-18'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App