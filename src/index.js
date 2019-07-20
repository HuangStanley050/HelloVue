import "./styles.css";

let vue = new Vue({
  el: "#app",
  data: {
    title: "Hello Wolrd",
    link: "http://google.com",
    rawHTML: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
      this.title = "Hey";
      return this.title;
    }
  }
});

let vEvent = new Vue({
  el: "#app2",
  data: {
    counter: 0
  },
  methods: {
    increase: function() {
      this.counter++;
      return null;
    }
  }
});

let exercise = new Vue({
  el: "#exercise",
  data: {
    name: "Stanley",
    age: 88,
    img:
      "https://www.rspcapetinsurance.org.au/RSPCA/media/Images/Hero/cat-insurance-hero.jpg"
  },
  methods: {
    randomFloat: function() {
      let number = (Math.random() * (1 - 0) + 0).toFixed(4);
      return number;
    }
  }
});
