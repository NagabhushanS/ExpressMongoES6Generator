import DBPool from '../configs/database';

export default class ContactForm {
    static dbHandle;


    //db logic
    static injectDB(dbHandle) {
        this.dbHandle = dbHandle.db().collection('contactforms');
        console.log('Successfully injected db into User Model');
    }

    static getDB() {
        return this.dbHandle;
    }

    //core methods
    static validateContactForm(contactForm) {
        return new Promise((resolve, reject)=>{
            const name = this._convert(contactForm.name);
            const email = this._convert(contactForm.email);
            const phone = this._convert(contactForm.phone);
            const message = this._convert(contactForm.message);
            
            //name and message validation
            if (name=='' || message=='') {
                reject('Name and message are both required');
                return;
            } 
            
            //email and phone validation
            if (email=='' && phone=='') {
                reject('Either email or phone is required');
                return;
            }

            if (!this._validateEmail(email) && !this._validatePhone(phone)) {
                reject('Invalid email or phone');
                return;
            }

            const validContactForm = {
                name,
                email,
                phone,
                message
            };

            resolve(validContactForm);
        });

    }


    static async addContactForm(contactForm) {
        let validContactForm = await this.validateContactForm(contactForm);
        await this.addValidContactForm(validContactForm);
        return validContactForm;
    }

    static addValidContactForm(contactForm) {
        return new Promise((resolve, reject)=>{
            this.dbHandle.insertOne(contactForm, (err, res)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contactForm);
            });
        });
    }

    //helper methods
    static _convert(field) {
        if (field==undefined || field==null) {
            return '';
        }
        return field.trim();
    }

    static _validateEmail(email) {
        console.log('EMAIL: '+email);
        return (email.match(/^[a-zA-Z0-9\.\-]+@([a-zA-Z0-9\-]+\.)+[a-z]+$/)!=null);
    }

    static _validatePhone(phone) {
        return (phone.match(/^[+]?[0-9 ]{10,20}/)!=null);
    }
}