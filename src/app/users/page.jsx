import AllUserTable from "@/components/AllUserTable";
import { getUsers } from "../lib/data";
import { addUser, deleteUser } from './../lib/action';
import AddUserModal from "@/components/AddUserModal";

const UsersPage = async() => {
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex justify-between py-10">
                <h2>All Users: {users.length}</h2>
                <AddUserModal addUserAction={addUser}></AddUserModal>
            </div>

            <AllUserTable users={users} deleteUserAction={deleteUser}></AllUserTable>
        </div>
    );
};

export default UsersPage;