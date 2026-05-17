export const getUsers = async ()=>{
    const res = await fetch('http://localhost:5002/users');
    const data = await res.json();
    return data;
}

export const getUserDetails = async (userId)=>{
    const res = await fetch(`http://localhost:5002/users/${userId}`);
    const data = await res.json();
    return data;
}
