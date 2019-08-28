//create breakfast object in an array
const breakfast = [
    {
    fryUp: ["Over-medium eggs", " canadian bacon", " potatoes", " toast"],
    drink: "English breakfasttea",
    condiments: ["Cholula hot sauce", " avocado", " seriously sharp cheddar"]
}]

//create a function to tell what to display in DOM
const makeBreakfast = (item) => {
    return `<div>
                <p>Food: ${item.fryUp}</p>
                <p>Drink: ${item.drink}</p>
                <p>Condiments: ${item.condiments}</p>
            </div>`
}

//make a new variable to select the class and document it. You need separate variables to separate design and logic of functionality.
const myBreakfast = document.querySelector(".brekkieContainer");

//make a new function to pull breakfast into innerHTML method. "+=" means HTML is being added to what is existing.
breakfast.forEach(item => {
    myBreakfast.innerHTML += makeBreakfast(item);
});
console.log(breakfast);


//alternative method: 
const breakfast = {
    food: {
        name: "Nature Valley",
        type: "Granola Bar"
    },
    drink: {
        name: "McCafe",
        type: "Coffee"
    } 

}

const breakfastArticle = document.querySelector(".breakfast");

const consume = (meal) =>{
    return `
    <h1>James McClarty ate:</h1>
    <ul>
        <li>${meal.food.name} ${meal.food.type}</li>
        <li>${meal.drink.name} ${meal.drink.type}</li>
    </ul>`
}

breakfastArticle.innerHTML = consume(breakfast);


