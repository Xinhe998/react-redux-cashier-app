export const onItemSelected = (payload) => (
    { type: 'ADD_SELECTED_ITEM', payload }
)

export const onItemUnselected = (payload) => (
    { type: 'DEL_SELECTED_ITEM', payload }
)

export const updateSelectedItemQuantity = (payload) => (
    { type: 'UPDATE_QUANTITY', payload }
)


export const updateFood = (payload) => (
    { type: 'UPDATE_FOOD', payload }
)

export const updateIsSelectedForFood = (payload) => (
    { type: 'UPDATE_SELECTED_FOOD', payload }
)

export const updateDrink = (payload) => (
    { type: 'UPDATE_DRINK', payload }
)

export const updateIsSelectedForDrink = (payload) => (
    { type: 'UPDATE_SELECTED_Drink', payload }
)

export const addFoods = (payload) => (
    {type: 'ADD_FOODS', payload}
)

export const addDrinks = (payload) => (
    {type: 'ADD_DRINKS', payload}
)