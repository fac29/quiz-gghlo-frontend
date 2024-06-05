// import React from 'react'
import Button from '../Button/Button' 
import   './Sidebar.css'
import { resetGame } from '../../utils/utils'

export default function Sidebar() {
  return (
    <div className="sidebarcontainer">
        <div className="leftgroup">
            <div className =" round"></div>
            <div className = "purple"><p>0 / 10  Correct</p></div>
            <div className = "purple"><p> 80% Success Rate</p></div>
        </div>
        <div className="rightgroup">
        <Button
					btnclassName='btnPrimary'
					btnText='Reset Game'
					btnonClick={() => resetGame}
				/>
        </div>
        </div>
  )
}

