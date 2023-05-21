import React from 'react'
function Home() {

    // const moreProj = document.getElementById("moreProj")
    // const hiddenProjects = document.getElementById("hiddenProjects")
    // const covidtracker = document.getElementById("covidtracker")
    // const showProj1 = document.getElementById("dummy1")
    // const showProj2 = document.getElementById("dummy2")
    // const showProj3 = document.getElementById("dummy3")
    // const showProj4 = document.getElementById("dummy4")
    // const showProj5 = document.getElementById("dummy5")
    // const showProj6 = document.getElementById("dummy6")
    // const showProj7 = document.getElementById("dummy7")
    // const noteCard = document.getElementById("noteCard")
    // const calCard = document.getElementById("calCard")
    // const card = document.getElementsByClassName("card")
    // const cardConainer = document.getElementById("card-conainer")
    // const formContainer = document.getElementById("form-container")
    // const contactmeid = document.getElementById("contactmeid")
    // const moreprojbtn = document.getElementById("moreprojbtn")
    // const firstDiv = document.getElementById("firstDiv")
    // function mediaFunc(med) {
    //     if (med.matches) {
    //         // cardConainer.style.height="3820px";
    //         cardConainer.style.height = "4700px";
    //         moreprojbtn.style.display = "none";
    //         firstDiv.style.marginTop = "50px";
    //     }
    //     else {
    //         cardConainer.style.height = "2000px";
    //         contactmeid.style.marginTop = "130px";
    //     }

    // }
    // moreProj.addEventListener("click", () => {
    //     moreProj.style.display = "none"
    //     hiddenProjects.style.display = "none";
    //     showProj1.style.display = "block";
    //     showProj2.style.display = "block";
    //     showProj3.style.display = "block";
    //     showProj4.style.display = "block";
    //     showProj5.style.display = "block";
    //     showProj6.style.display = "block";
    //     showProj7.style.display = "block";
    //     // formContainer.style.marginTop="-100px"
    //     noteCard.style.zIndex = 40;
    //     calCard.style.zIndex = 40;
    //     covidtracker.style.zIndex = 4;
    //     const medialist = window.matchMedia("(max-width:1000px)")
    //     mediaFunc(medialist)
    //     medialist.addListener(mediaFunc)
    // })
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Portfolio</a>
                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#moreaboutmeid">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#myprojectid">My
                                        Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#contactmeid">Contact Me</a>
                                </li>
                            </ul>
                            <div >

                                <a href="#" className="btn btn-outline-light mr-md-5" id="downloadbtn">Download
                                    Resume</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <canvas className="background" style={{ "position": "absolute" }}></canvas>
                <div className="container-fluid" >
                    <div className="row fb-bg" style={{ "position": "relative" }}>
                        <div className="col-12 my-md-auto col-md-6 px-5  order-2 order-md-1 details pb-md-3">
                            <h4 className="mx-md-5">Hey, I am</h4>
                            <h2 className="h2 mx-md-5">Santosh
                                Janardan
                                Zore</h2>
                            <h6 className="mx-md-5">Web Developer | Competitive Programmer | Computer Engineer </h6>
                            <div className="mx-md-5 mt-3">
                                <a type="button" className="btn btn-outline-dark" href="#contactmeid">Contact Me</a>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2 d-flex" style={{ 'justifyContent': "center", "alignItems": "center" }}>
                            <img src={window.location.origin + "/png/2.jpg"} alt="photo" width="500" />
                        </div>
                    </div>
                </div>
                <div className="row py-2 mx-0" id="moreaboutmeid">
                    <h1 className="text-center ">More About Me</h1>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/5.png"} alt="photo" width="450px" />
                    </div>
                    <div className="small-container col-12 col-md-6">
                        <p className="para infopara p-4 p-md-0">I am a Full Stack Developer with more than one year experience and
                            having Good Knowledge in developing applications using Node.js as Backend also
                            Skilled in C++. Strong Engineering profession with Bachelor of
                            Engineering Focus in Computer Science From Government College of Engineering And
                            Research Awsari.
                        </p>
                        <a type="button" className="btn btn-outline-dark" href="#contactmeid">Contact Me</a>
                    </div>
                    <div className="small-container col-12 col-md-6 my-5 my-md-0">
                        <h2>Skill IN</h2>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-html5 fa-2x" style={{ "color": "#e34c26" }}></i>HTML5 </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-css3-alt fa-2x" style={{ "color": "#264de4" }}></i>CSS3 </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-git-alt fa-2x" style={{ "color": "orange" }}></i>Git </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-bootstrap fa-2x" style={{ "color": "#563d7c" }}></i>
                                BootStrap </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-js-square fa-2x" style={{ "color": "#f0db4f" }}></i>
                                Javascript </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-github fa-2x"></i>
                                Github </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-node-js fa-2x" style={{ "color": "#68a063" }}></i>
                                Node.js </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-react fa-2x" style={{ "color": "#7cc5d9" }}></i>
                                React.js </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-html5 fa-2x" style={{ "color": "#e34c26" }}></i>HTML5 </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column">
                                <img className="overflowImg mb-1" src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png" alt="" width="35" />
                                C++ </div>
                        </div>
                    </div>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/8.png"} alt="photo" width="450px" />

                    </div>
                </div>
            </div>
            <div id="myprojectid">
                <h1 className="center" id="h1">My Projects</h1>
                <div id="card-conainer" className="MoreAbout-div mt-5">
                    <div >
                        <div className="row">
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/amzon.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Amazon Clone</h5>
                                        <p className="card-text">This is an E-commerce web application created with MERN Stack. It supports Features like Add items to cart,Buy items,Track orders,Like items,View delivery status, etc.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://amazon-clone-by-santosh.onrender.com/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/Mern-Stack-Amazon-clone" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/full-stack.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mern Stack Booking App</h5>
                                        <p className="card-text">It is an powerfull application to search 100+ hotels world wide. user can register hotel rooms based on room's availabilty,room cost and location of hotel. </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://hotel-booking-app-ryet.onrender.com/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/Full-Stack-Booking-App" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/whatsapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Whatsapp Clone</h5>
                                        <p className="card-text">It is a messenger application created with VueJs and Socket.io. By which we can send messages ,emojis to any registered user Also, edit Profile Picture , etc. </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="#" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="#" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" id="calCard"style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/auto.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Automatic Email Sender</h5>
                                        <p className="card-text">It is an Automatic Email sender Website Also created with MERN
                                            stack. By which we can send mail easily.
                                        </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="#" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="#" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" id="calCard"style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/weatherapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Weather App</h5>
                                        <p className="card-text">This website will gives Temperature of searching City along with
                                            that it will also gives wind speed, climate status and Much More.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://santosh-weather-app-svj8.onrender.com/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/Weather_App" target="__blank" className="readmore"
                                            style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" id="calCard" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/mypostman.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">My Postman Api</h5>
                                        <p className="card-text">fully featured Postman Api. user can perform GET,POST,PUT,PATCH API requests on any supported API.Response is customized using advanced css features ex.(prism.css)</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://POSTMASTER-TO-GET-AND-POST-REQUEST-USING-JAVASCRIPTNG.santoshzore.repl.co" target="__blank"
                                                className="btn btn-outline-dark" type="button">View Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/POSTMASTER" target="__blank" className="readmore"
                                            style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" id="calCard" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/TextUtils.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">TextUtils App</h5>
                                        <p className="card-text">on this website user can perform various opertions on text like converting text from lowercase to uppercase,copy text,remove extra space and many more.yello,green,blue,white and black vision modes are supported.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://santoshzore123.github.io/Textutils/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/Textutils" target="__blank" className="readmore"
                                            style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 my-2 dummy" id="dummy6">
                                <div className="card cards"style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/calculater.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">calculator</h5>
                                        <p className="card-text">Calculator Website where we can perhtmlForm all mathematical
                                            operations.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://CALCULATOR-USING-JAVASCRIPT.santoshzore.repl.co"
                                                target="__blank" className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/CALCULATOR" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div >

                            <div className="col-12 col-md-6 my-2 dummy" id="dummy5">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/noteapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taking App</h5>
                                        <p className="card-text">Basic Note Taking Website by using Vanilla JS, Css3, Html5 and
                                            Bootstrap.Where we can Read ,Write and Delete notes which are Store in Your
                                            Local
                                            Storage.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://magic-notes.santoshzore.repl.co"
                                                target="__blank" className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/NOTES-APP" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div >

                            <div className="col-12 col-md-6 my-2 dummy" id="dummy4">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/portfolio.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">portfolio</h5>
                                        <p className="card-text">This is My Personal Website created by using
                                            node.js,Express.ja,hbs
                                            and MongoDB Atlas as a Database.where you contact me, Download my Resume.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://portfolio-santosh-zore.onrender.com/"
                                                target="__blank" className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/SANTOSHZORE123/santosh-portfolio" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read
                                            more...</a>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
                <div className="btn-parent" id="moreProj">
                    <button type="button" className="btn btn-outline-dark " id="moreprojbtn">More Projects</button>
                </div>
                <div className="hiddenProjects" id="hiddenProjects"></div>
            </div >
            <div className="container-fluid">
                <div className="row" id="contactmeid">
                    <h1 className="center mb-5 mx-0">Get In Touch</h1>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/13.png"} alt="photo" width="800px" />
                    </div>
                    <div className="container form-container col-12 col-md-4">
                        <form className=" row display my-md-5">
                            <div className="col-12 col-md-11 mt-md-0 mt-5">
                                <label htmlFor="inputEmail4" className="form-label">First name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                    name="fname" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="inputEmail4" className="form-label">Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                    name="lname" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="name@gmail.com"
                                    name="email" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="Number" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name="mnumber" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="Suggetion" className="form-label">Any Suggestion</label>
                                <input type="text" className="form-control" name="suggetion" autoComplete="off" />
                            </div>

                            <div className="col-12 col-md-11 text-center">
                                <button className="btn btn-light w-75 my-5 my-md-0 mt-md-5 mx-auto" >Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ "display": "flex", "justifyContent": "center", "height": "100px" }}>
                <a id="linkedin" className="pointer fab fa-linkedin fa-2x mx-3"
                    style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }}
                    href="https://www.linkedin.com/in/santosh-zore-1a7a85241/" target="__blank"></a>
                <a id="github" className="pointer fab fa-github-square fa-2x mx-3"
                    style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }} href="https://github.com/SANTOSHZORE123"
                    target="__blank"></a>
                <i id="whatsapp" className="pointer fab fa-whatsapp fa-2x mx-3" style={{ "color": "black", "height": "fit-content" }}></i>
                <i id="instagram" className="pointer fab fa-instagram fa-2x mx-3" style={{ "color": "black", "height": "fit-content" }}></i>
            </div>
        </>
    )
}

export default Home