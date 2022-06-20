import React from 'react'

function create() {
  return (
    <section className='w-1/2 mx-auto my-8'>
        <form >
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='name'>name</label>
                <input className='outline-none p-2 rounded-sm border-none w-full bg-gray-300' type="text" id='name'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='description'>description</label>
                <input className='outline-none p-2 rounded-sm border-none w-full bg-gray-300 ' type="text" id='description'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='price'>price</label>
                <input className='outline-none p-2 rounded-sm border-none w-full bg-gray-300' type="number" id='price'/>
            </div>
            <div className='mb-4'>
                <label className='text-sm font-semibold block mb-2 capitalize text-gray-500' htmlFor='file'>upload nft</label>
                <input type="file" id='file'/>
            </div>
            <button className='bg-purple-500 w-full p-2 rounded-sm text-white font-semibold capitalize'>create digital assets</button>
        </form>
    </section>
  )
}

export default create