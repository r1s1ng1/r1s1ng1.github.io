fetch("posts.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {

        const feed = document.getElementById("feed");

        posts.forEach(function (post) {

            const article = document.createElement("article");

            article.classList.add("feed-post");


            const date = document.createElement("p");

            date.classList.add("feed-date");
            date.textContent = post.date;


            const text = document.createElement("p");

            text.classList.add("feed-text");
            text.textContent = post.text;


            article.appendChild(date);
            article.appendChild(text);


            if (post.image) {

                const image = document.createElement("img");

                image.src = post.image;
                image.alt = "";

                article.appendChild(image);

            }


            feed.appendChild(article);

        });

    });