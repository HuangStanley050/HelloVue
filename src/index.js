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
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(number, event) {
      this.counter += number;
    },
    updateCoordinate: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    dummy: function(e) {
      e.stopPropagation();
    },
    alertMe: function() {
      alert("You have entered");
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
