import AllUserTable from "@/components/AllUserTable";
import { getUsers } from "../lib/data";

const UsersPage = async() => {
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto'>
            <h2>All Users: {users.length}</h2>

            <AllUserTable users={users}></AllUserTable>
        </div>
    );
};

export default UsersPage;