import config from "../../config";
import { Student } from "../student/student.interface";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: Student) => {
  //set user object
  const userData : Partial<TUser> = {};

  //use default password
  userData.password = password || (config.default_pass as string);

  //set student role
  userData.role = "student";

  //set manually id
  userData.id = "202410001"

  //create student 
  const result = await UserModel.create(userData);

  if( Object.keys(result).length){
    studentData.id = result.id;
    studentData.user = result._id
  }

  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
