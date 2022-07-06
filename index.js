const app = new Vue({
    el : "#app",

    data : {
        todos : [
            {
                text: 'Fare i compiti',
                done: false,
                removed: false
            },
            {
                text: 'Fare la spesa',
                done: true,
                removed: false
            },
            {
                text: 'Fare il bucato',
                done: false,
                removed: false
            }
        ],
    },

    methods : {
        removeListElement(index){
            /* let liArr = document.querySelectorAll("ul li");
            console.log(liArr);
            console.log(index);
            liArr[index].remove(); */

            this.todos[index].removed = true;
        }
    }

});