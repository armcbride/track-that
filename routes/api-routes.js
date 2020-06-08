const router = require("express").Router();
const Workout = require("../models/workout.js");

//GET
router.get("/api/workouts", (req,res) => {
    Workout.find().then(
        dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
    });
});

//POST
router.post("/api/workouts", (req,res)=> {
    Workout.create({}).then(
        dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
    });
});

//PUT
router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body}},
        {new:true, runValidators: true}
        ).then(
        dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
    });
});

//GET limited workout range
router.get("/api/workouts/range", (req, res)=> {
    Workout.find({}).limit(7).then(
        dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
    });
})

//DELETE
router.delete("/api/workouts", ({body}, res)=> {
    Workout.findByIdAndDelete(body.id)
        .then(
        () => {
            res.json(true)
        }).catch(err => {
            res.json(err)
    });
})

module.exports = router;