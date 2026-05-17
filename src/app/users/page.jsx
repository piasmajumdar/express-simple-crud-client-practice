import { getUsers } from "../lib/data";

const UsersPage = async() => {
    const users = await getUsers();

    return (
        <div>
            <h2>All Users: {users.length}</h2>
        </div>
    );
};

export default UsersPage;