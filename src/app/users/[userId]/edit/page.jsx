import { updateUser } from '@/app/lib/action';
import { getUserDetails } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const EditUser = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserDetails(userId);

    const updateUserWrapper = async(formData)=>{
        "use server"
        await updateUser(formData, userId);
    }

    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='text-center font-bold text-2xl py-6'>Edit User Details: {user.name}</h2>
            <form action={updateUserWrapper} className="flex flex-col gap-4">
                <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" defaultValue={user?.email} name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" defaultValue={user?.role} name="role" type="text">
                    <Label>Role</Label>
                    <Input placeholder="Enter user role" />
                </TextField>
                <div className='flex gap-2'>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" slot="close">Update User</Button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;