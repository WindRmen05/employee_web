const Employee = require('../model/employeeModel');
const catchAsync = require('../utils/catchAsync');

exports.createEmployee = catchAsync(async (req,res,next) => {
    const data = await Employee.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        jobRole: req.body.jobRole,
        experience: req.body.experience,
    });

    res.status(200).send({
        status: 'success',
        data
    });
});

exports.getAllEmployees = catchAsync(async (req,res,next) => {
    const data = await Employee.find();

    res.status(200).send({
        status: 'success',
        data
    });
});