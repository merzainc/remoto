/*
Warnings:

- You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
- You are about to drop the `Point` table. If the table is not empty, all the data it contains will be lost.

 */
-- DropForeignKey
ALTER TABLE "Activity"
DROP CONSTRAINT "Activity_guardForce_fkey";

-- DropForeignKey
ALTER TABLE "Point"
DROP CONSTRAINT "Point_activityId_fkey";

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "Point";

-- CreateTable
CREATE TABLE
    "activities" (
        "id" SERIAL NOT NULL,
        "start" VARCHAR(255) NOT NULL,
        "end" VARCHAR(255) NOT NULL,
        "distance" INTEGER NOT NULL,
        "guardId" VARCHAR(255) NOT NULL,
        CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "points" (
        "id" SERIAL NOT NULL,
        "num" INTEGER NOT NULL,
        "lng" DOUBLE PRECISION NOT NULL,
        "lat" DOUBLE PRECISION NOT NULL,
        "activityId" INTEGER NOT NULL,
        CONSTRAINT "points_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "checkpoints" (
        "id" SERIAL NOT NULL,
        "name" VARCHAR(255) NOT NULL,
        "lat" DOUBLE PRECISION NOT NULL,
        "lng" DOUBLE PRECISION NOT NULL,
        CONSTRAINT "checkpoints_pkey" PRIMARY KEY ("id")
    );

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_guardId_fkey" FOREIGN KEY ("guardId") REFERENCES "guards" ("force") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "points" ADD CONSTRAINT "points_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;