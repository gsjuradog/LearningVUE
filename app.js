const app = Vue.createApp({
  //an object that represents the root component
  //data and functions go here
  //Also the component templete goes here
  //the properties inside data function are accesible from the template
  data(){
    return {
      title: 'title bla',
      author: 'el escritor',
      age: 45,
      showBooks: true,
    }
  },
  methods: {
    changeTitle(title) {
      this.title= title
    },
    toggleShowBooks() {
      this.showBooks= !this.showBooks;
    }
  }
}
);

app.mount('#app');