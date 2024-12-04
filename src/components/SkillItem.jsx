import React from 'react'

const SkillItem = ({name, imageUrl}) => {
  return (
    <div className="p-6 shadow-sm bg-white dark:bg-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 my-auto justify-center items-center">
        <div className="m-auto">
          <img src={imageUrl} alt="Image" width="64" height="64" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default SkillItem