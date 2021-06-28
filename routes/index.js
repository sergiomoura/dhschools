var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {res.render('index',{title:'DHSchools'})});
router.get('/home',(req,res) => {res.render('home')});
router.get('/alunos',(req,res) => {res.render('alunos/alunos-index')});
router.get('/alunos/create',(req,res) => {res.render('alunos/alunos-create')});
router.get('/areas',(req,res) => {res.render('areas/areas-index')});
router.get('/cursos',(req,res) => {res.render('cursos/cursos-index')});

module.exports = router;
