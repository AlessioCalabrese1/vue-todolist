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

        textNewLiElement: ""
    },

    methods : {
        removeListElement(index){
            this.todos[index].removed = true;
        },

        addNewElement(){
            const newLiElement = {
                text: this.textNewLiElement,
                done: false,
                removed: false,
            };
            this.todos.push(newLiElement); 
            this.textNewLiElement = "";
        },

        invertDone(index){
            if (this.todos[index].done === true) {
                this.todos[index].done = false;
            } else{
                this.todos[index].done = true;
            } 
        }
    }

});