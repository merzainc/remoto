-- CreateTable
CREATE TABLE "guards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "force" VARCHAR NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "device_id" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guards_force_key" ON "guards"("force");

-- CreateIndex
CREATE UNIQUE INDEX "guards_phone_key" ON "guards"("phone");
