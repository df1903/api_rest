/** Dto */
const studentDto = require("../../model/dto/student.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config")

/** Helper */
const helper = require("../helpers/general.helper");

exports.createStudent = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };
    studentDto.save(std, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        let r = config.get("roles").student;
        let user = {
            name: std.name,
            lastName: std.lastName,
            username: std.code,
            password: helper.encryptPassword(req.body.password),
            role: r

        };
        userDto.save(user, (err, u) => {
            if(err){
                return res.status(400).json(
                    {
                        error:err
                    }
                );
            }
            res.status(201).json(
                {
                    info: data
                }
            )
        });
    });
};

exports.updateStudent = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };
    studentDto.update({_id: req.body.id}, std, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
        
    });
};

exports.getAll = (req, res, next) => {
    
    studentDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
        
    });
};

exports.getByCode = (req, res, next) => {
    
    studentDto.getAll({code: req.params.code}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};

exports.deleteStudent = () => {
    studentDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(204).json()
    });
}
