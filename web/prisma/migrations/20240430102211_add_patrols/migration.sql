/*
  Warnings:

  - The primary key for the `guards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `guards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "guards" DROP CONSTRAINT "guards_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "guards_pkey" PRIMARY KEY ("force");

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "start" VARCHAR(255) NOT NULL,
    "end" VARCHAR(255) NOT NULL,
    "distance" INTEGER NOT NULL,
    "guardForce" VARCHAR(255) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Point" (
    "id" SERIAL NOT NULL,
    "num" INTEGER NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_guardForce_fkey" FOREIGN KEY ("guardForce") REFERENCES "guards"("force") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
