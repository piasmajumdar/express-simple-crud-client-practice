import { revalidatePath } from "next/cache";

export const deleteUser = async(userId)=>{
    "use server"
    const req = await fetch(`http://localhost:5002/users/${userId}`, {
        method: 'DELETE',
    });
    const res = await req.json();
    console.log(res);

    //TODO: revalidate path
    if(res.deletedCount > 0){
        revalidatePath('/users');
    }
}