import fakerStatic from "faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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

    await prisma.permission.createMany({
      data: [
        {
          permission_id: fakerStatic.datatype.uuid(),
          permission_name: "super_admin",
          permission_create: true,
          permission_delete: true,
          permission_read: true,
        },
        {
          permission_id: fakerStatic.datatype.uuid(),
          permission_name: "01_publication_admin",
          permission_create: true,
          permission_delete: true,
          permission_read: true,
        },
        {
          permission_id: fakerStatic.datatype.uuid(),
          permission_name: "01_publication_writer",
          permission_create: true,
          permission_delete: false,
          permission_read: true,
        },
        {
          permission_id: fakerStatic.datatype.uuid(),
          permission_name: "01_publication_reader",
          permission_create: false,
          permission_delete: false,
          permission_read: true,
        },
      ],
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
