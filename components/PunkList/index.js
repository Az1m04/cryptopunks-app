import React from 'react'
import CollectionCard from '../CollectionCard'


function PunkList({punkListData,setSinglePunkData}) {

    const newpunkList=punkListData?.filter((val)=>!(val?.name==='Green punk'))

    return (
  
        <div className='flex cursor-pointer w-full p-5 '>
        {newpunkList.map((punk)=>(
            <div className='w-1/6 ml-8 hover:scale-110 hover:scale-110  hover:delay-150 duration-300 ease-in-out  hover:shadow-xl hover:border-gray-600' onClick={()=>{setSinglePunkData(punk)}}>
                <CollectionCard 
                    key={punk.token_id}
                    id={punk.id}
                    name={punk.name}
                    traits={punk.traits}
                    punkImage={punk.image_original_url}
                />
            </div>
        ))}
        </div>
        
       
    )
}

export default PunkList
