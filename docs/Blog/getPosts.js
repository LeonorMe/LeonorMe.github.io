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
                            <a href="#">${lpData.topics}</a>, 
                            <a href="#">${lpData.tags}</a> 
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
                                <a href="#">${pData.topics}</a>, 
                                <a href="#">${pData.tags}</a> 
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
                                <a href="#">${pData.topics}</a>, 
                                <a href="#">${pData.tags}</a> 
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

// Get topic in url
function getTopic() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get("topic");
    return topic;
}

// Filter posts per topic
function getTopicPosts(){
    const topic = getTopic();

    setSearch(topic);
    setTopicHero(topic);

    fetch("posts.json")
    .then((response) => response.json())
    .then((data) => {
        data.find

        let filterData = data.filter((post) => post.topics == topic);
        //console.log(filterData)
        if(filterData.length == 0){
            getAllPosts();
            //console.log(" No posts founs for ", topic)
        }
        const pSection = document.querySelector(".posts");
            
        for (let i = filterData.length - 1; i >= 0; i--) {
            const pData = filterData[i];
            const pArticle = document.createElement("article");
            pArticle.classList.add("post");

            pArticle.innerHTML = `
                <div class="row">
                    <div>      
                        <img src="${pData.images[0]}" alt="post-cover-image">
                    </div>  
                    <div class="col-gold-small">
                        <div class="topics">
                            <a href="#">${pData.topics}</a>, 
                            <a href="#">${pData.tags}</a> 
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
}

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
        //console.log(pData);

        const pMain = document.querySelector("main");
        const psection = document.createElement("section");
        psection.classList.add("post-detail");	
        
        psection.innerHTML = ` 
        <div class="topics">
            <a href="#">${pData.topics}</a>,
            <a href="#">${pData.tags}</a>
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


/* --- search --- */

function search(){
    let select = document.getElementById("select");
    let list = document.getElementById("list");
    let selectText = document.getElementById("selectText");
    let options = document.getElementsByClassName("options"); 
    let input = document.getElementById("search-in");   

    select.onclick = function(){
        list.classList.toggle("open");
    }

    for (let i = 0; i < options.length; i++){

        options[i].onclick = function(){
            if(i != 0){
                window.location.href = "blog.html?topic=" + this.innerHTML.toLowerCase();
            }else{
                window.location.href = "blog.html";
            }
            selectText.innerHTML = this.innerHTML;
            input.placeholder = "Search in " + this.innerHTML.toLowerCase();
        }
    }
}

function setSearch(topic){
    if(topic != undefined){
        let selectText = document.getElementById("selectText");
        let input = document.getElementById("search-in");   
    
        selectText.innerHTML = toUpper(topic);;
        input.placeholder = "Search in " + topic;
    }
}

function setTopicHero(topic){
    let title = document.querySelector("h1");

    fetch("topics.json")
    .then((response) => response.json())
    .then((data) => {
        const tData = data.find((t) => t.title == topic);
        
        title.innerHTML = toUpper(tData.title);
        
        const cover = document.querySelector(".to-cover");
        cover.innerHTML = `<img class="cover-image" src="${tData.cover}" alt="post-cover-image">`;;
        cover.classList = "cover-image";
    });
    
}


/* --- */

// Capitalize
function toUpper(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}