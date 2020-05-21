import express from 'express';
import ContactForm from '../models/ContactForm';
const router = new express.Router();

router.options('/', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin==null?'*':req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
});


router.post('/', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin==null?'*':req.headers.origin);
    
    const contactForm = req.body;
    console.log(req.body);
    ContactForm.addContactForm(contactForm).then((validatedContactForm)=>{
        res.status(201).json({
            result: 'success',
            validatedContactForm
        });
    }).catch((err)=>{
        res.status(400).json({
            result: 'failure',
            err
        });
    });
});

export default router;