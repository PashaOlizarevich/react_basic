import EmployersListItem from "../employees-list-item/employees-list-item";
import './employers-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem /* name={item.name} salary={item.salary} то что дальше индентично этой записи */ {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;