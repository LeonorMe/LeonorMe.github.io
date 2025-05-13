//document.addEventListener("DOMContentLoaded", getLastPost);
//getPosts();

// Last post
function getLastPost() {
    fetch("posts.json")
        .then((response) => response.json())
        .then((data) => {
            const lpData = data[data.length - 1];
            const lpSection = document.querySelector(".last-post");
            const lpArticle = document.createElement("article");

            //TODO: add topic to posts.json  link.href = "detail.html?id=" + p.id;
            // TODO: suport more than 1 tag

            lpArticle.innerHTML = `
                <div class="row">
                    <div class="col-gold-big">      
                        <img src="${lpData.images[0]}" alt="las-post-cover-image">
                    </div>  
                    <div class="col-gold-small">
                        <div class="topics">
                            <a href="#">${lpData.tags[0]}</a> 
                        </div>

                        <h2 class="title">${lpData.title}</h2>   

                        <span class="date">${lpData.date}</span>
                        <p class="abstract">${lpData.abstract}</p>
                    </div>
                </div>
            `;

            // On click article go to detail.html?id=lpData.id
            lpArticle.addEventListener("click", () => {
                window.location.href = "detail.html?id=" + lpData.id;
            });

            lpSection.appendChild(lpArticle);
    })
};

// All posts - last post
function getPosts() {
    fetch("posts.json")
        .then((response) => response.json())
        .then((data) => {
            const pSection = document.querySelector(".posts");
            
            // TODO: limit to 9 posts until scroll down
            
            // go trow data from data.length - 1 to 0
            for (let i = data.length - 2; i >= 0; i--) {
                const pData = data[i];
                const pArticle = document.createElement("article");
                pArticle.classList.add("post");
        
                //TODO: add topic to posts.json  link.href = "detail.html?id=" + p.id;
                // TODO: suport more than 1 tag
        
                pArticle.innerHTML = `
                    <div class="row">
                        <div>      
                            <img src="${pData.images[0]}" alt="post-cover-image">
                        </div>  
                        <div class="col-gold-small">
                            <div class="topics">
                                <a href="#">${pData.tags[0]}</a> 
                            </div>
                            <h2 class="title">${pData.title}</h2>   
                            <span class="date">${pData.date}</span>
                        </div>
                    </div>
                `;

                // On click article go to detail.html?id=lpData.id
                pArticle.addEventListener("click", () => {
                    window.location.href = "detail.html?id=" + pData.id;
                });
        
                pSection.appendChild(pArticle);
            }
        })
};

// All posts
function getAllPosts() {
    fetch("posts.json")
        .then((response) => response.json())
        .then((data) => {
            const pSection = document.querySelector(".posts");
            
            // TODO: limit to 9 posts until scroll down
            
            // go trow data from data.length - 1 to 0
            for (let i = data.length - 1; i >= 0; i--) {
                const pData = data[i];
                const pArticle = document.createElement("article");
                pArticle.classList.add("post");
        
                //TODO: add topic to posts.json  link.href = "detail.html?id=" + p.id;
                // TODO: suport more than 1 tag
        
                pArticle.innerHTML = `
                    <div class="row">
                        <div>      
                            <img src="${pData.images[0]}" alt="post-cover-image">
                        </div>  
                        <div class="col-gold-small">
                            <div class="topics">
                                <a href="#">${pData.tags[0]}</a> 
                            </div>
                            <h2 class="title">${pData.title}</h2>   
                            <span class="date">${pData.date}</span>
                            
                        </div>
                        
                        <div class="abstract">${pData.abstract}</div>
                    </div>
                `;

                // On click article go to detail.html?id=lpData.id
                pArticle.addEventListener("click", () => {
                    window.location.href = "detail.html?id=" + pData.id;
                });
        
                pSection.appendChild(pArticle);
            }
        })
};


// Post Detail
function getPostDetail() {
    getPostById(getId());
}

// get id in link
function getId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}

// Get post by id
function getPostById(id) {
    
    fetch("posts.json")
    .then((response) => response.json())
    .then((data) => {
        const pData = data.find((post) => post.id == id);
        console.log(pData);

        const pMain = document.querySelector("main");
        const psection = document.createElement("section");
        psection.classList.add("post-detail");	
        
        psection.innerHTML = ` 
        <div class="topics">
            <a href="#">${pData.tags[0]}, ${pData.tags[0]}</a>
        </div>
        <h1 class="title">${pData.title}</h1>  
        <span class="date">${pData.date}</span>
        <br>

        <div class="cover-image">      
            <img class="cover-image" src="${pData.images[0]}" alt="post-cover-image">
        </div>  
        
        <p class="abstract">${pData.abstract}</p>

        <div class="post-body">
            <div class="content">
                ${pData.content}
            </div> 
            <div class="images">
            ${pData.images.map((image) => `<img src="${image}" alt="post-image">`).join("")}
            </div>
        </div>
        `;

        pMain.appendChild(psection);
    })

};