const data = {
    "Bio": `
    import {useState} from 'react';

    function App(){
    const [name, setName] = 
    useState("Kojo Addo");

    return(
         <div>
          <h1>Hi, my name is {name}, and I am a 
          Frontend Developer</h1>
         </div>
        );
    }
    `,
    "Projects": `
    import {useState} from 'react';

    function App(){
    const [projects, setProjects] =  
    useState("realEstate","blog", "eCommerce");

    return(
         <div>
          <h1>I have worked on these projects:
          {projects}</h1>
         </div>
        );
    }
    `,
    "Skills": `
    import {useState} from 'react';

    function App(){
     const [skills, setSkills] = 
     useState("react","javascript");

    return(
         <div>
          <h1>I am conversant with 
          {skills}</h1>
         </div>
        );
    }
    `
}

export function getData() {
    return data
}