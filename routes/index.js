var express = require('express');
var router = express.Router();

function random(n){return Math.floor(Math.random()*n)}

/* GET home page. */
router.get('/', function (req, res, next) {
    const enties = ["мандарин", "апельсин", "грузин", "карантин", "маркер", "гендер", "монитор", "взрыв"];


    res.render('index', {
        array : Array(random(30)).fill(1).map(()=>({num:random(10),name:enties[random(8)]}))
    });
});

module.exports = router;
