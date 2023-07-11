import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import RecipeView from '../components/pages/RecipeView'
import CategoryRecipes from '../components/pages/CategoryRecipes'
import LoginUser from '../components/pages/Login'
import ProfileUser from '../components/pages/Profile'
import AddRecipe from '../components/pages/AddRecipe'
function RouterComponent(props){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>} />
                <Route path="/login" element={<LoginUser/>}/>
                <Route path="/post-recipe" element={<AddRecipe/>}/>
                <Route path="/recipe" element={<RecipeView/>}/>
                <Route path="/category" element={<CategoryRecipes/>}/>
                <Route path="/profile" element={<ProfileUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterComponent;