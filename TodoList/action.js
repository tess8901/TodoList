const vm = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos:  [
                {
                    id: 1,
                    content: '6/22 1500 交TodoList',
                    complete: true,
                },
                {
                    id: 2,
                    content: '謝謝你們!辛苦了!',
                    complete: false,
                },
                {
                    id: 3,
                    content: '天天都是美好的一天!',
                    complete: false,
                },
            ],
        };
    },
    methods: 
    {
        createTodo()
        {
            let newTodo = 
            {
                id: this.todos.length +1,
                content: this.newTodo,
                complete: false,
            };

            this.todos.push(newTodo);
            this.newTodo = '';
        },
        deleteTodo(todo,index)
        {
            let del = confirm(`你確定要刪除 " ${todo.content} " 嗎？ `);
            if(del) 
            {
                this.todos.splice(index, 1);
            }
        },
    },
}).mount('#app');
        
        