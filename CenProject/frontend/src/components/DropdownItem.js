
import Accordion from 'react-bootstrap/Accordion';

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
                </tb>
                </table>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default DropdownMenu;