const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment(){
            this.age++
        },
        decrement(){
            this.age--
        },
        updateLastName(msg, event){
            // console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    // if you are using a function that calculates a value, you want to use computed property. 
    // you must always return a value. that value is stored in vue
    computed: {
        fullName(){
            console.log('Full name computed property was called!')
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    }
}).mount('#app');

console.log(vm)

// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 3000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2');