import React from 'react'
import "./Github.scss";
import Macwindows from "./Macwindows.jsx";
import githubData from "../../assets/github.json";

const Github = ({windowName}) => {

    function GithubCard({id=-1, image= null, title= "", description= "", tags=[], repoLink="", demoLink= ""}){
        return(
            <div className="card" key={id}>
                <div className="image">
                    <img src={image} title={title} alt={`Project ${id}`} />
                </div>
                <div className="main-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span className="tag" key={index}>{tag}</span>
                        ))}
                    </div>
                    <div className="links">
                        {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository</a>}
                        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo Link</a>}
                    </div>
                </div>
            </div>
        )
    }

  return (
    <Macwindows windowName={windowName}>
        <>
            <h2>My Github Projects</h2>
            <div className="github">
                {githubData.map((item, idx) => {
                    return <GithubCard key={idx} id={idx} image={item.image} title={item.title} description={item.description} tags={item.tags} repoLink={item.repoLink} demoLink={item.demoLink} />;
                })}
            </div>
        </>
    </Macwindows>
  )
}

export default Github;
