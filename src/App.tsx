import { useState } from 'react';
import { arrData } from './data.tsx'
// const arrData = null;



export function App() {
	let [selectedTrackId, setSelectedTrackId] = useState(null)
	
	if(arrData === null){
		return <span>Loading...</span>
	}
	if(arrData.length === 0){
		return <span>No Data</span>
	}

  return (
    <div>
		{arrData.map((currentData)=>{
			return(
				<div key={currentData.id} style={{
					border: currentData.id === selectedTrackId ? '1px solid #fff' : 'transparent'
				}} onClick={()=>{setSelectedTrackId(currentData.id)}}>{currentData.title}</div>
			)
		})}
    </div>
  )

}

