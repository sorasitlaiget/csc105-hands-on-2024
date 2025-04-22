import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const getAllUsers = async () => {
    const users = await db.user.findMany();
    return users;
  };
  const updateName = async (id: number, newFname: string, newLname: string) => {
    const user = await db.user.update({
        where: { id },
        data: { firstName: newFname,
                lastName: newLname,
        },
    });
    return user;
};
export { isDuplicate,createUser,getAllUsers,updateName};