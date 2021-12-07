-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
