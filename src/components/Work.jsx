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
       <div className={props.isLight ? "light-section": "dark-section" }>
            <section id="workSection" className="workSection" ref={workRef}>
            <div className="headline-worksection">
                 <div>
                     <div className="align-hedline">
                        <h1>{props.headline}</h1>
                        { awards.length ?  <div className="awards-section">
                                        { displayAwards }
                                    </div > :  ""
                        }
                     </div>
                   <h3>{props.shortText}</h3>
                 </div>
            </div>
         <div className="content-workSection">
                <div>
                    <div className="bread-texts">
                        <div >
                            <h3>Tech </h3>
                            <ul className="technicsList">
                                { displayTechnics }
                            </ul>
                            <div>
                                <h3>About the project</h3>
                                <p> {props.text}
                                </p>
                            </div>
                    </div>
                </div>
                        <div className="links-section">
                            <a href={props.linkProjectSite} target="_blank" 
                            className={props.isLight?  "projectLink dark-section":"projectLink light-section" }>Try it out!</a> 
                            <a href={props.linkGithub} target="_blank" className="logoLink">
                                <img src={props.gitLogo} className={props.isLight?"link-logo git-logo dark":"link-logo git-logo"} alt="GitHub"></img>
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