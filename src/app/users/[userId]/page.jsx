import { getUserDetails } from '@/app/lib/data';
import React from 'react';

const UserDetails = async({params}) => {
    const {userId} = await params;
    // console.log(userId);

    const user = await getUserDetails(userId);

    return (
        <div>
            <h2>User Details: {user.name}</h2>
        </div>
    );
};

export default UserDetails;