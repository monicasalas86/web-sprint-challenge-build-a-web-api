const express = require('express')
const {
    handleError,
    checkProjectId,
    validateProject
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
router.post('/', validateProject, (req, res, next) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})
router.put('/:id', checkProjectId, validateProject, (req, res, next) => {
    Projects.update(req.params.id, req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})
// [DELETE] /:id
router.delete('/:id', checkProjectId, (req, res) => {
    
})
// [GET] /:id/actions
router.get('/:id/actions', checkProjectId, (req, res) => {
    
})

router.use(handleError)

module.exports = router