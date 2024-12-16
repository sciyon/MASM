import { HttpException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  create_user(data: Prisma.UserCreateInput){
    return this.prisma.user.create({ data })
  }

  create_user_data(data: Prisma.UserdataCreateInput){
    return this.prisma.userdata.create({ data })
  }

  get_users(){
    return this.prisma.user.findMany({ include : { user_data: true } });
  }

  get_user_by_id(id: number){
    return this.prisma.user.findUnique({ 
      where : { id },  
      include : { 
        user_data: {
          select : {
            first_name: true,
            middle_name: true,
            last_name: true,
          }
        }
      } 
    });
  }

  async update_user_by_id(id: number, data: Prisma.UserUpdateInput){
    const findUser = await this.get_user_by_id(id)
    if(!findUser) throw new HttpException('User Not Found', 404)
    
    if(data.email){
      const findUser = await this.prisma.user.findUnique({
        where: { email: data.email as string},
      })
      if(findUser) throw new HttpException('Email already in use', 400)
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete_user_by_id(id: number){
    const user = await this.get_user_by_id(id);
    if(!user) throw new HttpException("User Not Found!", 404);

    return this.prisma.user.delete({ where : { id } })
  }
}