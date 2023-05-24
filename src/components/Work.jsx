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

        const displayAwards = awards.map((award) => {
            return (
                <div key={award.key}>
                    <img src={props.imgBlad} className="twig" ></img>
                        <div className="awards-text">
                            <h5>{award.text}</h5> <a>{award.link}</a>
                        </div>
                    
                    <img src={props.imgBlad} className="twig mirrored"></img>
                </div>
            )
        })


    return (
        <div>
            <section id="workSection" className="workSection" ref={workRef}>
            <div className="headline-worksection">
                 <div>
                    <h1>{props.headline}</h1>
                    <h3>{props.text}</h3>
                 </div>
                  
            </div>
            { awards.length ?  <div className="awards-section">
                                     { displayAwards }
                                 </div > :  ""
            }
           
          
            <div className="content-workSection">
                <div>
                    <div className="bread-texts">
                        <div >
                            <h3>Technics: </h3>
                            <ul className="technicsList">
                                { displayTechnics }
                            </ul>
                            <div>
                                <h3>About the project</h3>
                                <p> More about my thinking when designing the bot!
                                    More about my thinking when designing the bot!
                                    More about my thinking when designing the bot!
                                </p>
                            </div>
                    </div>
                </div>
                        <div className="linksSection">
                            <a href={props.linkProjectSite} target="_blank" className="projectLink">Visit site</a> 
                            <a href={props.linkGithub} target="_blank" className="logoLink">
                                <img src={props.gitLogo} className="gitLogo" alt="GitHub"></img>
                            </a>
                        </div>
                </div>
                
                    <img src={props.img} className="projectImg"></img>
                
            </div>
           
            </section>
           
      
            </div>
       
    )
}

export default Work