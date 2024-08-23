import React, { useEffect, useState } from 'react'

function Api() {
    let [chisom, setChisom] = useState(null)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setChisom(json))
      .catch(err=>console.log("error"))
    },[])
  return (
    <div className='  bg-slate-600 grid grid-cols-5 gap-4'>
        {
        chisom ?
        chisom.map((girl)=>(
            <div className=' h-[80%]  w-[50%]'>
                <div className=' h-[50%] bg-[blue]'>
                    <img src={girl.url}  />
                    </div>
                    
                        <h1 className=' h-[10%] bg-[green] text-[black] font-semibold grid justify-end items-center text-[10px] text-ellipsis  overflow-hidden text-nowrap'>{girl.title}</h1>
                        <p className=' h-[20%] bg-[wheat]  text-[black] grid justify-center items-center text-[20px]'>{girl.id}</p>
                 
                    </div>
                

        )) : <p>loaginggggg</p>
        }
    </div>
  )
}

export default Api