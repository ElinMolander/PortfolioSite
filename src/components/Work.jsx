import {useNav} from "../hooks/useNav.jsx"

function Work(props) {
   
   const workRef = useNav("Work")
   const technics = props.technics
   const awards = props.awards
   
   const displayTechnics = technics.map((technic) =>{
        return (
        <li key={technic}>
            {technic}
            </li>
        )
    })

        const displayAwards = awards.map((award) =>{
        return (
                <div key={award}>
                    <img src={props.imgBlad} className="twig" ></img>
                    <h5>{award}</h5>
                    <img src={props.imgBlad} className="twig mirrored"></img>
                </div>
            )
        })


    return (
        <div className="title-element">
            <section id="workSection" className="workSection" ref={workRef}>

            { awards.length ?  <div className="awards-section">
                                     { displayAwards }
                                 </div > :  ""
            }
             <div className="headline-worksection">
                <h1>{props.headline}</h1>
                <h3>{props.text}</h3>  
            </div>
         
            <div className="content-workSection">
         
            
                <div >
                    <div className="bread-texts">
                        <div>
                            <h3>Technics: </h3>
                            <ul className="technicsList">
                                { displayTechnics }
                            </ul>
                        </div>
                       <p> More about my thinking when designing the bot!
                            More about my thinking when designing the bot!
                            More about my thinking when designing the bot!</p>
                    </div>
                   
                    {/* <div className="underline"></div> */}
                    <div className="linksSection">
                        <a href={props.linkProjectSite} target="_blank" className="projectLink">Visit site</a> 
                        <a href={props.linkGithub} target="_blank" className="logoLink">
                            <img src={props.gitLogo} className="gitLogo" alt="GitHub"></img>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={props.img} className="projectImg"></img>
                </div>
            </div>
         
            </section>
           
      
            </div>
       
    )
}

export default Work