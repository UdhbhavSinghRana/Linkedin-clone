import React from 'react'

function Post({photo,Name,desc}) {
  return (
    <div >
        <div className='flex justify-start'>
            <div className='flex '>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='h-12 '></img>
                <div className='flex flex-col '>
                    <div className='pl-2 font-semibold text-gray-800'>Udhbhav Rana</div>
                    <div className='pl-2  text-gray-800 text-xs'>68,323 Followers</div>
                    <div className='pl-2  text-gray-800 text-xs'>2w</div>
                </div>
            </div>
        </div>
        <div className='text-sm pt-2 pl-2'>
        A National Seminar on “Systematic Literature Review” for architecture faculty and students was organised with the objective to develop the expertise in conducting quality research. Research being a building block that can find answers to things that are unknown, helps to fill gaps in knowledge and change ways of thinking.
        </div>
        <div className='flex justify-around pt-4'>
            <div className='flex items-center px-2 hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/126/126473.png' className='h-7'></img>
                <div className='pl-2'>Likes</div>
            </div>
            <div className='flex items-center px-2 hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/1380/1380338.png' className='h-7'></img>
                <div className='pl-2'>Comments</div>
            </div>
            <div className='flex items-center px-2 hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/1358/1358023.png' className='h-7'></img>
                <div className='pl-2'>Share</div>
            </div>
            <div className='flex items-center px-2 hover:bg-zinc-100 h-12 hover:rounded-md transition ease-in-out'>
                <img src='https://cdn-icons-png.flaticon.com/512/786/786205.png' className='h-7'></img>
                <div className='pl-2'>Send</div>
            </div>
        </div>
    </div>
  )
}

export default Post;