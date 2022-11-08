import Searchbar from "./searchbar"
export default function RegisterCourse(){
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
                    <header>Unit Category</header>
                </div>
            </section>
        </>
        
    )
}