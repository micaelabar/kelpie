-- CreateTable
CREATE TABLE "Kelpie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "lastSee" TEXT NOT NULL,
    "countlastSee" INTEGER NOT NULL DEFAULT 1,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "live" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "Kelpie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kelpie_name_key" ON "Kelpie"("name");
