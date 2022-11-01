import menu from '../data/card.json';

export const getData = (food) =>{
    try{
        const foodToLookFor = menu[food];
        return foodToLookFor;

    }catch(err){
        console.log(err)
    }
}