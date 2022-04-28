import React, { useState } from "react";

function Achievements(props) {
  const [achievementsType, setAchievementsType] = useState({
      value: props.data[Object.keys(props.data)[0]],
      description: props.data[Object.keys(props.data)[1]]
  })

  return(
    <div className="achieve">
      <div 
        className="value heading" 
        data-key={Object.keys(props.data)[0]}
      >
        {achievementsType.value}
      </div>
      <input 
        data-value-content
        contentEditable={true} 
        suppressContentEditableWarning={true}
        data-key={Object.keys(props.data)[0] + '_text'}
        className="key"
        onChange={(e) => setAchievementsType({...achievementsType, description: e.target.value})}
        value={achievementsType.description}
      />
    </div>
  )
}

export default Achievements