import EmployersListItem from "../employees-list-item/employees-list-item";
import './employers-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}

export default EmployeesList;