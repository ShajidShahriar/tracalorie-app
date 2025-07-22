class Calorietracker{
constructor(){
this._calorieLimit = 1800
this._totalCalories = 0
this._meals = []
this._workouts = []
this._displayCaloriesTotal()
this._displayCalorieLimit()
this._displayCaloriesConsumed()
this._displayCaloriesBurned()
this._displayCaloriesRemaining()

}
//public methods 
addMeal(meal){
    this._meals.push(meal)
    this._totalCalories += meal.calories
    this._render()

}
addWokrout(workout){
    this._workouts.push(workout)
    this._totalCalories -= workout.calories
    this._render()
}
// private methods

_displayCaloriesTotal(){
    const calorieLimitEl = document.getElementById('calories-total')
    calorieLimitEl.innerHTML = this._totalCalories
}
_displayCalorieLimit(){
    const totalCaloriesEl = document.getElementById('calories-limit')
    totalCaloriesEl.innerHTML = this._calorieLimit
}
_displayCaloriesConsumed(){
    const caloriesConsumedEl = document.getElementById('calories-consumed')
    const consumed = this._meals.reduce((total,meal) =>  total + meal.calories ,0)
    caloriesConsumedEl.innerHTML = consumed
}
_displayCaloriesBurned(){
    const caloriesBurnedEl = document.getElementById('calories-burned')
    const burned = this._workouts.reduce((total,workout) =>  total + workout.calories ,0)
    caloriesBurnedEl.innerHTML = burned
}
_displayCaloriesRemaining(){
    const caloriesRemainingEl = document.getElementById('calories-remaining')
    const remaining = ( this._calorieLimit - this._totalCalories )
    caloriesRemainingEl.innerHTML = remaining
}
_render(){
    this._displayCaloriesTotal()
    this._displayCaloriesConsumed()
    this._displayCaloriesBurned()
    this._displayCaloriesRemaining()
    
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
const lunch =new Meal('lunch',350)
tracker.addMeal(lunch)
const workout = new Workout('running',400)
tracker.addWokrout(workout)


console.log(breakfast)
console.log(workout)
console.log(tracker)
