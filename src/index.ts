import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const users = await prisma.user.findFirst({
  //   where: {
  //     user_id: "2b692735-5402-4cb7-8a93-a1f87dc0c52a",
  //   },
  //   include: {
  //     UserPermission: {
  //       include: {
  //         permission: true,
  //       },
  //     },
  //   },
  // });

  // console.log(JSON.stringify(users?.UserPermission, null, 2));

  // finding users of one publication

  const users = await prisma.publication.findMany({
    where: {
      AND: [
        {
          publication_id: "2b692735-5402-4cb7-8a93-a1f87dc0c52a",
        },
      ],
    },
    select: {
      UserPublication: {
        select: {
          user: {
            select: {
              user_email: true,
              UserPermission: {
                select: {
                  permission: {
                    select: {
                      permission_name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(JSON.stringify(users[0].UserPublication, null, 1));
}

main().catch(console.error);
