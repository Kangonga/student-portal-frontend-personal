import Searchbar from "./searchbar"
export default function DoneUnits(){
    return(
    <>
        <Searchbar />
        <section className="units-arranged">
            <div>
                <header>Unit Code</header>
                <p></p>
            </div>

            <div>
                <header>Unit Name</header>
                <p></p>

            </div>

            <div>
                <header>Unit Category</header>
                <p></p>

            </div>

            <div>
                <header>Unit Review</header>
                <p></p>
            </div>

            <div>
                <header>Unit Grade</header>
                <p></p>
            </div>
        </section>

    </>
        
    )
}