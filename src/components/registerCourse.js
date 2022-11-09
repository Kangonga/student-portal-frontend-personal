import Searchbar from "./searchbar"
export default function RegisterCourse({units}){
    console.log(units)
    return(
        <>
         
            <Searchbar/>
            <section className="units-arranged">
                <div>
                    <header>Unit Code</header>
                </div>
                <div>
                    <header>Unit Name</header>
                </div>
                <div>
                    <header>Unit Description</header>
                </div>
                <div>
                    
                </div>
                </section>
                {units.map(unit=>{
                    return <section className="units-arranged arranged">
                        <div>{unit.code}</div>
                        <div>{unit.name}</div>
                        <div>{unit.description}</div>
                        <div><button>Add</button></div>
                    </section>
                    })}
        </>
        
    )
}