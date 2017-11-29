var exercises = [
    {
        "name": "Pullups",
        "label": "Reps",
        "intervalRange": [5, 10],
        "frequency": 5,
        "color": "silver"
    },
    {
        "name": "Frenchies",
        "label": "Reps",
        "intervalRange": [1, 2],
        "frequency": 3,
        "color": "brown"
    },
    {
        "name": "Campus Board Slopers",
        "label": "Reps",
        "intervalRange": [3, 9],
        "frequency": 5,
        "color": "beige"
    },
    {
        "name": "Campus Board Crimps",
        "label": "Seconds",
        "intervalRange": "10-20",
        "color": "green"
    },
    {
        "name": "Leg Raises",
        "label": "Seconds",
        "intervalRange": [40, 100],
        "frequency": 4,
        "color": "Blue"
    },
    {
        "name": "Offsets",
        "label": "Reps",
        "intervalRange": [20, 30],
        "frequency": 4,
        "color": "Red"
    },
    {
        "name": "Pike sit-ups",
        "label": "Reps",
        "intervalRange": [50, 75],
        "frequency": 4,
        "color": "Gray"
    },
    {
        "name": "Medicine ball push-ups",
        "label": "Reps",
        "intervalRange": [20,40],
        "frequency": 4,
        "color": "light orange"
    },
    {
        "name": "Crucifixions",
        "label": "Seconds",
        "intervalRange": [40, 60],
        "frequency": 3,
        "color": "purple"
    },
    {
        "name": "Squats",
        "label": "Reps",
        "intervalRange": [20, 30],
        "frequency": 6,
        "color": "yellow"
    },
    {
        "name": "Russian Twists",
        "label": "reps",
        "intervalRange": [30, 50],
        "frequency": 5,
        "color": "lightgreen"
    },
    {
        "name": "Tricep Dips",
        "label": "Reps",
        "intervalRange": [10, 30],
        "frequency": 5,
        "color": "orange"
    },
    {
        "name": "Pushups",
        "label": "Reps",
        "intervalRange": [10, 15],
        "frequency": 7,
        "color": "pink"

    },
    {
        "name": "One-legged squats",
        "label": "Reps Per Leg",
        "intervalRange": [5, 10],
        "frequency": 3,
        "color": "red"
    },
    {
        "name": "Planks",
        "label": "Seconds",
        "intervalRange": [30, 120],
        "frequency": 6,
        "color": "cyan"
    }
];

function getRandomExercise() {
    var weightedExercises = [];
    exercises.forEach(function (exercise) {
        for (var i = 0; i < exercise.frequency; i++) {
            weightedExercises.push(exercise);
        }
    });
    var exercise = weightedExercises[Math.floor(Math.random() * weightedExercises.length)];
    var range = exercise.intervalRange[1] - exercise.intervalRange[0];
    range = range * Math.random();
    range = Math.floor(range);
    range += exercise.intervalRange[0];
    $(".text").html("Exercise:" + " " + exercise.name);
    $(".text2").html(range + " " + exercise.label);
    $("body").css('background-color', exercise.color);
}

getRandomExercise();
