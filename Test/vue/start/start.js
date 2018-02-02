var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false,
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: "learn javascript"
        }, {
            text: "learn vue"
        }, {
            text: "do a great task"
        }]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "Hello,vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello,vue'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
            id: 0,
            text: '蔬菜'
        }, {
            id: 0,
            text: '奶酪'
        }, {
            id: 0,
            text: '随便其它什么人吃的东西'
        }]
    }
})