const express = require('express');
const loginRouter = express.Router();
const db = require('./db/dbconnect');

loginRouter.use((req, res, next) => {
    console.log('==>loginRouter<==');
    next();
}) 
// set this for check of all protected resources when complete
// return browser cookie and db to check when needed
loginRouter.post('/:email/:password', (req, res) => {
    console.log('about to db query...')
    const query_user_state = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [req.params.email]
    }
    db.query(query_user_state, (err, results) => {
        if(err) return err;
        let [data] = results.rows;
        if(req.params.email && (req.params.password === results.rows[0].pass_hash)) {
            console.log('successful login data')
            res.status(200).json({
                "email": data.email, "id": data.id, "first_name": data.first_name, "last_name": data.last_name, "reading": data.reading_history, "role": data.role, "job_title": data.job_title});
        } else {
            // console.log('else triggered. pw not ===', req.params.password, results.rows[0].pass_hash)
            res.status(400).json({"result": false})
        }
    })
})
// loginRouter.get('/', (req, res, next) => {
//     console.log('default router response...end of login line');
//     res.send('no more routes...try again')
// })

module.exports = loginRouter;