const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('./../config/config')

const UserService = require('./userService');
const service = new UserService();

class AuthService{

    async getUser(email, password){
        const user = await service.findByEmail(email);  
        if (!user) {
            throw boom.unauthorized();
        } 
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw boom.unauthorized();
        }
        delete user.dataValues.password;
        return user;
    }
    signToken(user){ 
        const payload = {
          sub: user.id,
          role: user.role
      }
        const token = jwt.sign(payload, config.jwtSecret);
        return {
            user,
            token
        }};

    async sendRecovery(email){
        const user = await service.findByEmail(email);  
        if (!user) {
            throw boom.unauthorized();
        } 
        const payload = { sub: user.id }
        const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '10mins'});
        const link = `http://client.com/recovery?token=${token}`;
        await service.update(user.id, {recoveryToken: token});
        const mail= {
            from: config.smtpEmail,
            to: `${user.email}`,
            subject: "Email to restore password",
            text: "Hello world?",
            html: `<b>Ingresa a este link => ${link}</b>`,
        }
        const rta = await this.sendMail(mail);
        return rta;
    }

    async changePassword(token, newPassword) {
        try {
            const payload = jwt.verify(token, config.jwtSecret);
            const user = await service.findOne(payload.sub);
            if (user.recoveryToken !== token) {
                throw boom.unauthorized();
            }
            const hash = await bcrypt.hash(newPassword, 10);
            await service.update(user.id, {recoveryToken: null, password: hash});
            return { message: 'password changed' }
        } catch (error) {
            throw boom.unauthorized();
        }
    }

    async sendMail(infoMail){
        const user = await service.findByEmail(email);  
        if (!user) {
            throw boom.unauthorized();
        } 
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 465,
            secure: true,
            auth: {
              user: config.smtpEmail, 
              pass: config.smtpPassword,
            },
          });
          await transporter.sendMail(infoMail);
          return { message: 'mail has been sent' }
    }
}

module.exports = AuthService;