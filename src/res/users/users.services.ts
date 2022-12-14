import { usersRepository } from "../../infra/dataSource";

export async function findUserByEmail(email: string) {
  return usersRepository.findOneBy({ email });
}

export async function findUserByUserName(userName: string) {
  return usersRepository.findOneBy({ userName });
}
