// /create a key called myAirplane and set it to a value "CloudJet".
//within module.exports, create another key displayAirplane and set it to an anonymous function. The function should use the this statement to return myAirplane.

module.exports = {
    myAirplane: "CloudJet",
    displayAirplane: function() {return this.myAirplane;}
  };