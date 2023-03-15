-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "primarytelephone" TEXT NOT NULL,
    "addressline1" TEXT NOT NULL,
    "addressline2" TEXT NOT NULL,
    "addresstownCity" TEXT NOT NULL,
    "addresspostcode" TEXT NOT NULL,
    "addressstate" TEXT NOT NULL,
    "addresscountry" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL,
    "category_name" TEXT NOT NULL,
    "category_banner" TEXT NOT NULL,
    "subcategories" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_img" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "newprice" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "discount" TEXT NOT NULL,
    "offers" TEXT NOT NULL,
    "topselling" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_id_key" ON "Categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_name_key" ON "Products"("product_name");
