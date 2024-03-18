import Accordion from 'react-bootstrap/Accordion';
import '../style/DropdownItem.html';

function DropdownMenu({bool}) {
    return (
        <Accordion className="customAccordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Filter </Accordion.Header>
            <Accordion.Body>

                <table>
                <tb>
                    <tr><input type="checkbox"/>Sugar Free</tr>
                    <tr><input type="checkbox"/>Fat Free</tr>
                    <tr><input type="checkbox"/>Low Carbs</tr>
                    <tr><input type="checkbox"/>Most Ingredients Used</tr>
                    <tr><input type="checkbox"/>Vegetarian</tr>
                    <tr><input type="checkbox"/>Has Common Allergens</tr>
                    <tr><input type="checkbox"/>Least Cooking Time</tr>
                    <tr><input type="checkbox"/>Least Preparation Time</tr>
                    <tr><input type="checkbox"/>Type of Cuisine</tr>
                </tb>
                </table>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default DropdownMenu;
