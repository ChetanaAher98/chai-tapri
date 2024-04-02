import React from 'react'
import main from '../Images/main.jpeg'

export default function Club() {
    return (
        <>
        <div className='flex'>
            <div>
                <p className='text-5xl font-bold mt-20 ml-20' style={{color:" #041e42"}}>Home</p>
                <p className='text-gray-500  mt-5 text-md tracking-wider ml-20'>Explore unique travel, dining, recipes, and local experiences
                    with updates <br /> from our resource hub.</p>
            </div>
            <div >
                <img src={main} alt=""  style={{width:"500px",height:"300px"}}/>
            </div>
            </div>
        </>
    )
}
