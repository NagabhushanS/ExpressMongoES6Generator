import express from 'express';
import User from '../models/User';

const router = express.Router();

router.options('/', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin==null?'*':req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
});

router.get('/', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin==null?'*':req.headers.origin);
    res.json(JSON.stringify(User.getDB()));
});

router.post('/', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin==null?'*':req.headers.origin);
    const userObj = req.body;
    console.log(userObj);
    User.addUser(userObj).then(()=>{
        res.json({
            ok: true,
            username: userObj.name
        });
    }).catch((err)=>{
        console.log('ERR::: ');
        console.log(err);
        res.json({
            ok: false,
            err
        });
    });
});

module.exports = router;