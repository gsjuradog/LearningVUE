const app = Vue.createApp({
  //an object that represents the root component
  //data and functions go here
  //Also the component templete goes here
  //the properties inside data function are accesible from the template
  data(){
    return {
      url:'http://www.thenetninja.co.uk',
      age: 45,
      showBooks: true,
      x:0,
      y:0,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true},
        {title: 'wind of the name', author: 'rothfuss patrick',img:'assets/2.jpg', isFav: false},
        {title: 'of the wind name', author: 'p. rothfuss',img:'assets/3.jpg', isFav: true},
        
      ]
    }
  },
  methods: {
    changeTitle(title) {
      this.title= title
    },
    toggleShowBooks() {
      this.showBooks= !this.showBooks;
    },
  
    handleEvent(e, data) {
      console.log(e)
      if(data) console.log(data+data)
      this.showBooks= !this.showBooks
    },
    handleMousemove(e){
      this.x=e.offsetX;
      this.y= e.offsetY;
    }
  }
}
);

app.mount('#app');