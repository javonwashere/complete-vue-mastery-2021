const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>'
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
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