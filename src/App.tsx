import { arrData } from './data.tsx'
// const arrData = null;

export function App() {

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
				<div key={currentData.id} onClick={()=>{console.log(currentData.completed)}}>{currentData.title}</div>
			)
		})}
    </div>
  )


}

