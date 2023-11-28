import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import RecipeView from '../components/pages/RecipeView'
import AllRecipes from '../components/pages/AllRecipes'
import LoginUser from '../components/pages/Login'
import ProfileUser from '../components/pages/Profile'
import AddRecipe from '../components/pages/AddRecipe'
import AddRecipeStep from '../components/pages/AddRecipeStep'
import CategorizedRecipes from '../components/pages/CategorizedRecipes'
import SearchPage from '../components/pages/Search'

function RouterComponent(props){
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/post-recipe" element={<AddRecipe />} />
          
          <Route path="/category/:id" element={<CategorizedRecipes />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/recipes/:id" element={<RecipeView />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route path="/recipe-step/:id" element={<AddRecipeStep />} />
          <Route path="/search" element={<SearchPage />} />

          
        </Routes>
      </BrowserRouter>
    );
}
export default RouterComponent;