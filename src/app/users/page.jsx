import AllUserTable from "@/components/AllUserTable";
import { getUsers } from "../lib/data";
import { deleteUser } from './../lib/action';

const UsersPage = async() => {
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto'>
            <h2>All Users: {users.length}</h2>

            <AllUserTable users={users} deleteUserAction={deleteUser}></AllUserTable>
        </div>
    );
};

export default UsersPage;