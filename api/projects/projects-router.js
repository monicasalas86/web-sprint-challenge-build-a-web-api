const express = require('express')
const {
    handleError,
    checkProjectId
} = require('./projects-middleware')
const Projects = require('./projects-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})
router.get('/:id', checkProjectId, (req, res) => {
    res.status(200).json(req.projectFromDb)
})
// [POST] /
router.post('/', (req, res) => {
    
})
// [PUT] /:id
router.put('/:id', (req, res) => {
    
})
// [DELETE] /:id
router.delete('/:id', (req, res) => {
    
})
// [GET] /:id/actions
router.get('/:id/actions', (req, res) => {
    
})

router.use(handleError)

module.exports = router