function solve() {
    const sections = document.getElementsByTagName('section');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();
        if (task.value === '' || date.value === '' || description.value === '') {
            return;
        }

        let article = document.createElement('article');
        let title = document.createElement('h3');
        let descriptionInfo = document.createElement('p');
        let dueDate = document.createElement('p');
        let div = document.createElement('div');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');


        title.textContent = task.value;
        descriptionInfo.textContent = `Description: ${description.value}`;
        dueDate.textContent = `Due Date: ${date.value}`;
        div.className = 'flex';
        btn1.className = 'green';
        btn1.textContent = 'Start';
        btn1.addEventListener('click', start);
        btn2.className = 'red';
        btn2.textContent = 'Delete';
        btn2.addEventListener('click', del);


        article.appendChild(title);
        article.appendChild(descriptionInfo);
        article.appendChild(dueDate);
        div.appendChild(btn1);
        div.appendChild(btn2);
        article.appendChild(div);

        sections[1].children[1].appendChild(article);
    }

    function start(event) {
        const article = event.target.parentNode.parentNode;
        let btn1 = article.children[3].children[0];
        let btn2 = article.children[3].children[1];

        btn1.className = 'red';
        btn1.textContent = 'Delete';
        btn1.removeEventListener('click', add);
        btn1.addEventListener('click', del);
        btn2.className = 'orange';
        btn2.textContent = 'Finish';
        btn2.removeEventListener('click', del);
        btn2.addEventListener('click', finish);

        sections[2].children[1].appendChild(article);
    }

    function del(event) {
        event.target.parentNode.parentNode.remove();
    }

    function finish(event){
        let article = event.target.parentNode.parentNode;
        article.children[3].remove();
        sections[3].children[1].appendChild(article);
    }
}