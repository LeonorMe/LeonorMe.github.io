console.log("Getting posts...");

document.addEventListener("DOMContentLoaded", getLastPost);
getPosts();

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

            lpSection.appendChild(lpArticle);
    })
};

// All posts
function getPosts() {
    fetch("posts.json")
        .then((response) => response.json())
        .then((data) => {
            const pSection = document.querySelector(".posts");
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
        
                pSection.appendChild(pArticle);
            }
        })
};