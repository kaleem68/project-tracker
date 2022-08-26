/*
  Warnings:

  - You are about to drop the column `date` on the `Project` table. All the data in the column will be lost.
  - Added the required column `organization` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "organization" TEXT NOT NULL;
