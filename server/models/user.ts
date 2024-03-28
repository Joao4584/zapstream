// * Modules * //
import { prisma } from "../prisma";

// * Exports * //
 
// * Components * //

class UserModel {


	public async list(id: number) {
		const user = await prisma.users.findFirst({
			where: { id: id, status: true },
            select: {
                id: true,
                created_at: true,
                email: true,
                name: true,
                image_url: true,                
            }
		});	
		return user;
	}

}

export { UserModel };