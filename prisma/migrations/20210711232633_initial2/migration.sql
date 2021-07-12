/*
  Warnings:

  - Added the required column `news_updated_at` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `news_draft_updated_at` to the `News_Draft` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "news_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "news_updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "News_Draft" ADD COLUMN     "news_draft_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "news_draft_updated_at" TIMESTAMP(3) NOT NULL;
