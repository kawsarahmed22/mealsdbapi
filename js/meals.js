const loadMeals = () => {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);
    for(const meal of meals){
        console.log(meal);
    }
}

loadMeals()