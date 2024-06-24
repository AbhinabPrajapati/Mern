document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const saveTaskButton = document.getElementById('saveTaskButton');
    const taskTitle = document.getElementById('taskTitle');
    const taskDate = document.getElementById('taskDate');
    const todayTasks = document.getElementById('todayTasks');
    const tomorrowTasks = document.getElementById('tomorrowTasks');
    const upcomingTasks = document.getElementById('upcomingTasks');

    let tasks = [];

    function renderTasks() {
        todayTasks.innerHTML = '';
        tomorrowTasks.innerHTML = '';
        upcomingTasks.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.classList.toggle('completed', task.completed);

            const completeButton = document.createElement('button');
            completeButton.textContent = task.completed ? 'Undo' : 'Complete';
            completeButton.addEventListener('click', () => {
                task.completed = !task.completed;
                renderTasks();
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                tasks = tasks.filter(t => t !== task);
                renderTasks();
            });

            li.appendChild(completeButton);
            li.appendChild(removeButton);

            if (task.date === 'today') {
                todayTasks.appendChild(li);
            } else if (task.date === 'tomorrow') {
                tomorrowTasks.appendChild(li);
            } else {
                upcomingTasks.appendChild(li);
            }
        });
    }

    addTaskButton.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === taskModal) {
            taskModal.style.display = 'none';
        }
    });

    saveTaskButton.addEventListener('click', () => {
        const title = taskTitle.value.trim();
        const date = taskDate.value;

        if (title) {
            tasks.push({ title, date, completed: false });
            taskTitle.value = '';
            taskDate.value = 'today';
            renderTasks();
            taskModal.style.display = 'none';
        }
    });

    renderTasks();
});
