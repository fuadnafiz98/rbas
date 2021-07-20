/*
  Warnings:

  - Added the required column `user_id` to the `Publication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "UserPublication" (
    "publication_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,

    PRIMARY KEY ("publication_id","user_id")
);

-- AddForeignKey
ALTER TABLE "Publication" ADD FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPublication" ADD FOREIGN KEY ("publication_id") REFERENCES "Publication"("publication_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPublication" ADD FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
