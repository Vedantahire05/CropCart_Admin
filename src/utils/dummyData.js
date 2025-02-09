const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Ramlal", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "Ramlal@cropcart.com", location : "Shivajinagar", amount : 100, date : moment().endOf('day')},
        {name : "Kantilal", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "Kantilal@cropcart.com", location : "Viman Nagar", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "Shyam", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "Shyam@cropcart.com", location : "Balewadi", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Atharv", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "Atharv@cropcart.com", location : "Shiavjinagar", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Yash", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "Yash@cropcart.com", location : "Katraj", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Chirag", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "Chirag@cropcart.com", location : "Kondhwa", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Vedant", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "Vedant@cropcart.com", location : "Sangali", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@cropcart.com", location : "Balewadi", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        

    
    ]
});
