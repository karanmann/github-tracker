const projectsContainer = document.getElementById('projects')
const profileContainer = document.getElementById('profile')

const USER = 'karanmann'
const REPOS_URL = `https://api.github.com/users/${USER}/repos`

// ---- PROFILE -----//

const getProfile = () => {
    fetch (`https://api.github.com/users/${USER}`)
    .then (response => response.json())
    .then(data => {
    profileContainer.innerHTML += `
    <div class="profile-area">
        <div>
            <img class="user-img" src=${data.avatar_url}></img>
        </div>
        <div class="user">
            <h2>Karan Mann</h2>
            <a href="https://github.com/karanmann" class="user-name">${data.login}</a>
        </div>
    </div>
    <div class="bio-button">
        <p class="bio">${data.bio}</p>
        <button class="button" id="followButton">Follow</button>
    </div>
    `
    })
}
getProfile()

// ---- REPOS -----//

const getRepos = () => {
    fetch(REPOS_URL)
    .then(response => (response.json()))
    .then(data => {
        console.log(data)
        const yes = "Yes"
        const no = "No"
        data.forEach(repo => {
            projectsContainer.innerHTML += `
                <div class="project-card"> 
                    <div class="tooltip">
                        <span class="tooltiptext">Go to Github ></span>
                        <a href=${repo.clone_url} target="_blank">
                            <button class="open-modal" data-open="modal" id="open-modal">
                                <svg class="link-arrow" id="linkArrow" width="356" height="356" viewBox="0 0 356 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M175 65.8677L164.931 75.9369C162.548 78.3201 162.548 82.1842 164.931 84.5679L243.826 163.462H70.1829C66.8126 163.462 64.0801 166.195 64.0801 169.565V183.805C64.0801 187.175 66.8126 189.908 70.1829 189.908H243.826L164.931 268.802C162.548 271.186 162.548 275.05 164.931 277.433L175 287.503C177.383 289.886 181.247 289.886 183.631 287.503L290.133 181.001C292.516 178.617 292.516 174.753 290.133 172.37L183.63 65.8677C181.247 63.484 177.383 63.484 175 65.8677Z" fill="#dedede"/>
                                    <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="64" y="64" width="228" height="226">
                                    <path d="M175 65.8677L164.931 75.9369C162.548 78.3201 162.548 82.1842 164.931 84.5679L243.826 163.462H70.1829C66.8126 163.462 64.0801 166.195 64.0801 169.565V183.805C64.0801 187.175 66.8126 189.908 70.1829 189.908H243.826L164.931 268.802C162.548 271.186 162.548 275.05 164.931 277.433L175 287.503C177.383 289.886 181.247 289.886 183.631 287.503L290.133 181.001C292.516 178.617 292.516 174.753 290.133 172.37L183.63 65.8677C181.247 63.484 177.383 63.484 175 65.8677Z" fill="white"/>
                                    </mask>
                                </svg>
                            </button>
                        </a>
                            
                    </div>
                        <a class="break" href="${repo.html_url}">${repo.name}</a>
                        <div class="most-recent">
                            <p>Most recent push</p>
                            <h4>${new Date(repo.pushed_at).toDateString()}</h4>
                        </div>
                        <div class="default-branch">
                            <p>Default branch name</p>
                            <h4>${repo.default_branch}</h4>
                        </div>
                        <p>Allowed Forking: ${repo.allow_forking}</p>
                </div>`
        })
    })
}

getRepos()


