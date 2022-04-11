var drivers = [{name:"saket", age:"25", isActive:true, x_coor:4, y_coor:5}];

module.exports.details = (req, res)=>{
    res.send(drivers);
}

module.exports.addDriver = (req, res)=>{
    console.log(req.body);
    let driver = {name: req.body.name, age: req.body.age, isActive: req.body.isActive,
     x_coor: req.body.x_coor, y_coor: req.body.y_coor}
    drivers.push(driver);
    res.send(driver);
}