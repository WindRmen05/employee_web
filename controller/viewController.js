const Employee = require('../model/employeeModel');
const catchAsync = require('../utils/catchAsync');

exports.viewHome = catchAsync(async (req, res, next) => {
    res.status(200).render('home', {
        title: 'Home'
    });
});

exports.viewRegister = catchAsync(async (req, res, next) => {
    res.status(200).render('registration', {
        title: 'Register Form'
    });
});

exports.viewEmployees = catchAsync(async (req, res, next) => {
    const data = await Employee.find();
    res.status(200).render('registration', {
        title: 'All Employees',
        data
    });
});