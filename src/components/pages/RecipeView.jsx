import React, { useState } from "react";
import MasterLayout from "../layout/MasterLayout";
import RecipeImage from "../../assets/images/chef.jpg";
import { Button, Col, Table, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import '../../assets/css/recipeView.css'
function RecipeView(props) {
    const [cookRecipeButton, setCookRecipeButton] = useState(false);

  return (
    <MasterLayout>
      <div className="d-flex topSection mt-5">
        <Col xs="12" lg="6" className="px-3">
          <img src={RecipeImage} alt="Recipe Image" width="100%" />
        </Col>
        <Col xs="12" lg="6" className="padding5 mt-4">
          <h3>Recipe Name</h3>
          <p className="m-0">
            <span className="small ">Author Name</span>
            <span className="mx-5 small">
              <FontAwesomeIcon icon={faStar} id="starIcon" />
              4.5{" "}
            </span>
          </p>
          <p className="textJustify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            aliquid facere reprehenderit. Necessitatibus iste alias, mollitia,
            odit natus enim ratione recusandae dolores repudiandae neque at,
            quas accusamus eius animi illo asperiores laboriosam laudantium.
            Voluptatum doloremque molestiae officia consectetur odit ducimus
            delectus accusamus voluptate! Nam incidunt inventore vel consectetur
            amet ex!
          </p>
        </Col>
      </div>
      <Col lg="6" sm="12" xs="12" className="px-5 ">
        <Row className="mt-4 sectionBackground basicInfo">
          <Col lg="6" xs="12" className="d-flex flex-column ">
            <span> Cooking Time: 30 mins</span>
            <span className="pt-2">Category: Breakfast</span>
          </Col>
          <Col xs="12" lg={6} className="d-flex flex-column">
            <span>Servings: 2</span>
            <span className="pt-2">Number of Ingredients: 5</span>
          </Col>
        </Row>
        <h4 className="mt-5 mb-4">Ingredients</h4>
        <div className="sectionBackground">
          <ul className="pb-3">
            <li>ingredient 1</li>
            <li>ingredient 1</li>
            <li>ingredient 1</li>
            <li>ingredient 1</li>
            <li>ingredient 1</li>
            <li>ingredient 1</li>
          </ul>
        </div>
        <div className="h4 mt-5">Recipe Steps</div>
        <div className="mt-4 sectionBackground">
          <Table responsive borderless hover size="sm">
            <tbody className="fontSizeSmall">
              <tr>
                <td>Step Instructions</td>
                <td>15 mins</td>
              </tr>
              <tr>
                <td>Step Instructions Step Instructions </td>
                <td>15 mins</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={setCookRecipeButton} className="fontSizeSmall">
            Start Cooking
          </Button>
        </div>
        <h4 className="mt-5">Reviews</h4>
        <div className=" mt-4 sectionBackground">
          <div className=" mt-4 d-flex flex-column reviewSection">
            <span className="fs-6">Name</span>
            <span className="fs-6">
              {" "}
              <FontAwesomeIcon icon={faStar} id="starIcon" />{" "}
              <span className="fs-6 px-5">2023/01/01</span>
            </span>

            <span className="fs-6 pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              aliquid tempora cupiditate?
            </span>
            <hr />
          </div>
          <div className=" mt-4 d-flex flex-column reviewSection">
            <span className="fs-6">Name</span>
            <span className="fs-6">
              {" "}
              <FontAwesomeIcon icon={faStar} id="starIcon" />{" "}
              <span className="fs-6 px-5">2023/01/01</span>
            </span>

            <span className="fs-6 pt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              aliquid tempora cupiditate?
            </span>
            <hr />
          </div>
        </div>
      </Col>
    </MasterLayout>
  );
}

export default RecipeView;
