/*
  Warnings:

  - You are about to drop the column `nid` on the `guards` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `guards` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "guards_nid_key";

-- AlterTable
ALTER TABLE "guards" DROP COLUMN "nid",
DROP COLUMN "phone",
ALTER COLUMN "force" SET DATA TYPE VARCHAR;
