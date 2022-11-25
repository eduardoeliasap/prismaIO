/*
  Warnings:

  - Added the required column `author_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_id_fkey`;

-- AlterTable
ALTER TABLE `books` ADD COLUMN `author_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
