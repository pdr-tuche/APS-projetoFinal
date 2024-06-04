-- CreateTable
CREATE TABLE "restaurants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "reservations" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,
    CONSTRAINT "restaurants_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
