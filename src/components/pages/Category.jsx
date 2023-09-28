import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getFilteredCategories } from "../../api";
import { Preloader } from "../Preloader";
import { MealList } from "../MealList";


function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategories(name).then((data) => setMeals(data.meals))
    }, [name]);


    return (
       <>
            <button className="btn" onClick={goBack}>
                Go back
            </button>

            {!meals.length ? <Preloader /> : <MealList meals={meals} />}

            <button className="btn" onClick={goBack}>
                Go back
            </button>
       </>
    )

}


export { Category };