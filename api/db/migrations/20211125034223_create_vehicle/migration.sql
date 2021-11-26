-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgSrc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "extras" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "fees" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
