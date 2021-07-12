-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_password" VARCHAR(255) NOT NULL,
    "user_refresh_token" VARCHAR(255) NOT NULL,
    "user_last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "permission_id" UUID NOT NULL,
    "permission_name" VARCHAR(255) NOT NULL,
    "permission_create" BOOLEAN NOT NULL,
    "permission_read" BOOLEAN NOT NULL,
    "permission_delete" BOOLEAN NOT NULL,
    "permission_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "permission_updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "UserPermission" (
    "permission_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,

    PRIMARY KEY ("permission_id","user_id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "subscription_id" UUID NOT NULL,
    "subscription_name" VARCHAR(255) NOT NULL,
    "subscription_price" VARCHAR(255) NOT NULL,
    "subscription_details" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("subscription_id")
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "subscription_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,

    PRIMARY KEY ("user_id","subscription_id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" SERIAL NOT NULL,
    "publication_id" UUID NOT NULL,
    "publication_name" VARCHAR(255) NOT NULL,
    "publication_type" VARCHAR(255) NOT NULL,
    "publication_description" VARCHAR(255) NOT NULL,
    "publication_admin_id" UUID NOT NULL,
    "publication_readers_count" INTEGER NOT NULL,
    "publication_writers_count" INTEGER NOT NULL,

    PRIMARY KEY ("publication_id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "news_id" UUID NOT NULL,
    "news_title" VARCHAR(255) NOT NULL,
    "news_description" VARCHAR(255) NOT NULL,
    "news_writer_id" UUID NOT NULL,
    "news_assignee_id" UUID NOT NULL,

    PRIMARY KEY ("news_id")
);

-- CreateTable
CREATE TABLE "Assignee" (
    "id" SERIAL NOT NULL,
    "assignee_id" UUID NOT NULL,
    "assignee_user_id" UUID NOT NULL,
    "assignee_news_id" UUID NOT NULL,
    "assignee_status" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("assignee_id")
);

-- CreateTable
CREATE TABLE "News_Draft" (
    "news_draft_id" UUID NOT NULL,
    "news_id" UUID NOT NULL,
    "writer_id" UUID NOT NULL,

    PRIMARY KEY ("news_draft_id")
);

-- AddForeignKey
ALTER TABLE "UserPermission" ADD FOREIGN KEY ("permission_id") REFERENCES "Permission"("permission_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD FOREIGN KEY ("subscription_id") REFERENCES "Subscription"("subscription_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
