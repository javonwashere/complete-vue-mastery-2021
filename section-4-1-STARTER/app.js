let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate(){
    console.log('beforeCreate() function called!', this.message);
  },
  // if you only need the data, you can use the created method
  created(){
    console.log('created() function called!', this.message);
  },
  beforeMount(){
    console.log('beforeMount()function called!', this.$el);
  },
  // if you need the content rendered on the document, you need to use mounted
  mounted(){
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate(){
    console.log('beforeUpdate() function called!');
  },
  updated(){
    console.log('updated() function called!');
  },
  beforeUnmount(){
    console.log('beforeUnmount() function called!');
  },
  unmounted(){
    console.log('unmounted() function called!')
  }
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 2000);