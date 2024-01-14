const myObject = {
    property: "I am a property",
    myMethod: function() {
      console.log(this.property);
    }
  };
  
  myObject.myMethod(); // 输出: "I am a property"
  