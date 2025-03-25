import {projectsInfo } from "/projects.js"

const next = document.getElementById("next")
const back = document.getElementById("back")
const projects = document.getElementById("projects")

const gap = 30
let width = projects.offsetWidth

document.addEventListener("DOMContentLoaded", event => {
    projectsInfo.forEach(project => {
        const container = document.createElement("div")
        container.classList.add("project-card")

        const title = document.createElement("h3")
        title.innerText = project.projectName
        title.classList.add("project-title")
   
        const image = document.createElement("img")
        image.src = project.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p")
        desc.innerText = project.projectDesc
        desc.classList.add("project-text")

        const githubLink = document.createElement("a")
        githubLink.href = project.projectLink
        githubLink.innerText = "Link"
        githubLink.classList.add("project-link")

        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(desc)
        container.appendChild(githubLink)

        projects.append(container)

    })
})

next.addEventListener("click", event => {
    width = projects.offsetWidth
    projects.scrollBy(width + gap, 0)
})
back.addEventListener("click", event => {
    width = projects.offsetWidth
    projects.scrollBy(-(width+ gap), 0)
})
//------------------------------------------------------------------------------------

// Selecting the elements
const drawerItems = document.querySelectorAll(".info-wrapper")
const drawerAnswers = document.querySelectorAll(".answer")

drawerItems.forEach((item, index) => { 
    const question = item.querySelector('.question')
    const answer = item.querySelector('.answer')
    
    question.addEventListener("click", event => {

        let open = answer.classList.contains('open')
        drawerAnswers.forEach(answer => (answer.classList.remove("open"))) // Click open drawers
        
        // For the drawer we've clicked, open if not already open
        if(!open) {
            answer.classList.add('open')
        }
    })

})