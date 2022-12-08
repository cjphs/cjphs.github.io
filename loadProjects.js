//todo: load this from a json file instead
const projects = [
    [
        "GoLCube",
        "https://cjphs.github.io/golcube",
        "assets/golcube_thumbnail.png",
        "A 2D cellular automata simulator built over the surface of a 3D cube.",
        "Web, JavaScript"
    ],
    
    [
        "CA Script",
        "https://christophersch.github.io/golcube",
        "assets/ca_script_thumbnail.png",
        "Cellular Automata sandbox with simple rule set scripting.",
        "Web, JavaScript"
    ],
    // ,

    [
        "Infinite Maze Game",
        "https://github.com/cjphs/GameFramework",
        "assets/gameframework_thumbnail.png",
        "An infinite maze exploration game where the only direction is down.",
        "Java"
    ]

    // [
    //     "Anonventbot",
    //     "https://github.com/christophersch/anonventbot",
    //     "assets/anonventbot_thumbnail.png",
    //     "A Discord bot allowing users to submit anonymized messages to a specific channel.",
    //     "JavaScript, Node.js"
    // ],

    // [
    //     "Backrooms",
    //     "https://christophersch.github.io/backrooms/",
    //     "assets/backrooms_thumbnail.png",
    //     "Code doodle based on the popular internet phenomenon of the Backrooms",
    //     "Web, JavaScript, Code Doodle"
    // ]
]

let project_div = document.getElementById("projects");


var i = 0;
projects.forEach(project => {

    s = `<a href="${project[1]}" target="_blank">
            <div class="project_div" style="animation-delay:${i++/10}s">
                <div class="project_thumb"><img src="${project[2]}" width="100"></img></div>
                <div>
                    <h3> 
                    ${project[0]}
                    </h3>
                    <p>${project[3]}</p>

                    <p class="project_div_tag"><i>${project[4]}</i></p>
                </div>
        </div></a>
    `

    project_div.innerHTML += s;

    console.log(s)

    console.log(project_div.innerHTML);
} 

);
