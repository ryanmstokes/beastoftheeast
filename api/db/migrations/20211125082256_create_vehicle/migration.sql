/*
  Warnings:

  - You are about to drop the column `imgSrc` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to alter the column `passengers` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `price` on the `Vehicle` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `imgID` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "extras" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "fees" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Vehicle" ("cover", "description", "extras", "fees", "id", "passengers", "price", "title") SELECT "cover", "description", "extras", "fees", "id", "passengers", "price", "title" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
