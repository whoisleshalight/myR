import { arrData } from './data.tsx'


export function App() {

  return (
    <div>
		{arrData.map((arrData)=>{
			return(
				<div key={arrData.id} onClick={()=>{console.log(arrData.completed)}}>{arrData.title}</div>
			)
		})}
    </div>
  )
}

