-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'PROGRESS', 'COMPLETED', 'CANCELLED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "status" "Status" NOT NULL DEFAULT E'NEW';
