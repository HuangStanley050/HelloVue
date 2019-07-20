import "./styles.css";

let vue = new Vue({
  el:'#app',
  data:{
    title:"Hello Wolrd",
    link:"http://google.com"
  },
  methods:{
    sayHello: function () {return this.title}
  }
});