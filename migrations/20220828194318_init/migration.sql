/*
  Warnings:

  - You are about to alter the column `description` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(1)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1);
