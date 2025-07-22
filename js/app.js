class Calorietracker{
constructor(){
this._calorieLimit = 2000
this._totalCalories = 0
this._meals = []
this._workouts = []

}

addMeal(meal){
    this._meals.push(meal)
    this._totalCalories += meal.calories
}
addWokrout(workout){
    this._workouts.push(workout)
    this._totalCalories -= workout.calories
}

}

class Meal{
    constructor(name,calories){
        this.id = Math.random().toString(16).slice(2)
        this.name = name
        this.calories = calories
    }
}
class Workout{
    constructor(name,calories){
        this.id = Math.random().toString(16).slice(2)
        this.name = name
        this.calories = calories
    }
}

const tracker = new Calorietracker()

const breakfast = new Meal('morning-meal',200)
tracker.addMeal(breakfast)
const workout = new Workout('running',400)
tracker.addWokrout(workout)


console.log(breakfast)
console.log(workout)
console.log(tracker)

