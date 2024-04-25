import inside from "./assets/insiderest.svg"


function HomePage(){
    return(
    <div className="d-flex justify-content-center">
        <div className="container border border-dark" id="maincontainer">
            <div className="text-center mt-5">
                <h1>Welcome</h1>
                <p>Lisco Come L'olio</p>
                <p> 348 E Main St, Lexington, KY</p>
                <p>Monday-Sunday: 4:30pm - 11pm</p>
            </div>
             <div className="text-center  p-md-5">
                <h1>Italian Cuisine</h1>
                <img src={inside} id="insideImg"></img>
            </div>
        </div>
    </div>
    )
}




export default HomePage