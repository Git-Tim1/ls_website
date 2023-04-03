import React from 'react'

const InputField = ({datapoint, type, inputData }) => {
  return (
    <div>
        <label className='font-semibold text-lg mt-3 inline-block'>{datapoint}</label>
        <input type={type} onChange={inputDataValue => inputData(inputDataValue.target.value)} className='w-full mt-1 h-12 border bg-gray-100 focus:bg-white px-3 border-gray-100 outline-none focus:border-magenta duration-200' required />
    </div>
  )
}

export default InputField