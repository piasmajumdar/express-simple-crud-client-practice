import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {
    "use server"
    const req = await fetch(`http://localhost:5002/users/${userId}`, {
        method: 'DELETE',
    });
    const res = await req.json();
    // console.log(res);

    //TODO: revalidate path
    if (res.deletedCount > 0) {
        revalidatePath('/users');
    }
}


export const addUser = async (formData) => {
    "use server"
    const newUser = Object.fromEntries(formData.entries());
    const req = await fetch('http://localhost:5002/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const res = await req.json();
    // console.log(res);

    if(res.insertedId){
        revalidatePath('/users')
    }
}