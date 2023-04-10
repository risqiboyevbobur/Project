import Create from "../CreatePage/Create";
import Hotel from "../Hotel/Hotel";
import TableoneRow from "../Table/Table";

 

const MenuRouter = [
    {
        path: "/",
        element : <Hotel/>,
        title: "Carts"
    },
    {
        path: "/create",
        element : <Create/>,
        title: "Create page"
    },
    {
        path: "/tableone",
        element : <TableoneRow/>,
        title: "Result"
    }
   
]

export default MenuRouter