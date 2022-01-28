import TarjetaCoder from "./TarjetaCoder";


function Lista({elements}) {
    return (<div className="coders">
        { elements.map( element => <TarjetaCoder coder={element}/> )}
    </div>)
}

export default Lista;