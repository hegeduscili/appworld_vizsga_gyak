"use strict";

const tableBody = document.getElementById('table-body');


const postsPromise = new Promise((resolve, reject) => {
    const posts = new XMLHttpRequest();

    posts.onload = () => {
        resolve(JSON.parse(posts.response))
        console.log(JSON.parse(posts.response))
    }
    posts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    posts.send();
});

const usersPromise = new Promise((resolve, reject) => {

    const users = new XMLHttpRequest();

    users.onload = () => {
        resolve(JSON.parse(users.response))
        console.log(JSON.parse(users.response))
    }

    users.open('GET', 'https://jsonplaceholder.typicode.com/users');
    users.send();
});

const commentsPromise = new Promise((resolve, reject) => {
    const comments = new XMLHttpRequest();

    comments.onload = () => {
        resolve(JSON.parse(comments.response))
        console.log(JSON.parse(comments.response))
    }

    comments.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    comments.send();
});


Promise.all([postsPromise, usersPromise, commentsPromise])
    .then(([posts, users, comments]) => {
        posts.forEach(post => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${post.id}</td>
                <td>${post.title}</td>
            `;
            const user = users.find(user => user.id === post.userId);
            if (user) {
                tr.innerHTML += `<td>${user.name}</td>
            <td><button class='btn btn-primary w-100' id='${post.id}' data-bs-toggle="modal" data-bs-target="#modalUser">+</button></td>`;
            } else {
                tr.innerHTML += `<td>User not found</td>`;
            }
            tableBody.appendChild(tr);
        });

        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            let buttonid = button.getAttribute('id');
            button.addEventListener('click', () => {
                let modalTitle = document.querySelector('.modal-title');
                let modalBody = document.querySelector('#body');
                let author = document.getElementById('author');
                let commentsList = document.getElementById('comments');
                commentsList.innerHTML = ''; // Kommentek üresek a gombnyomás előtt
                // Gombhoz tartozó adatok
                let post = posts.find(post => post.id === parseInt(buttonid));
                modalTitle.textContent = post.title;
                modalBody.textContent = post.body;

                const user = users.find(user => user.id === post.userId);
                author.textContent = user ? user.name : 'User not found';

                const postComments = comments.filter(comment => comment.postId === post.id);
                postComments.forEach(comment => {
                    const li = document.createElement('li');
                    li.textContent = comment.body;
                    commentsList.appendChild(li);
                });

                // Modal megjelenítése
                let modal = new bootstrap.Modal(document.getElementById('modalUser'));
                modal.show();
            });
        });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
