import fakerStatic from "faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("here");
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        user_email: fakerStatic.internet.email(),
        user_id: fakerStatic.datatype.uuid(),
        user_name: fakerStatic.name.lastName(),
        user_password: fakerStatic.internet.password(),
        user_refresh_token: "",
      },
    });
  }
}

main()
  .catch((err) => {
    console.log("catch");
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    console.log("finally");
    prisma.$disconnect();
  });
