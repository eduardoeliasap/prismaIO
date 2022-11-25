/*
  Warnings:

  - You are about to drop the column `fk_id_teacher` on the `modules` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `modules` DROP FOREIGN KEY `modules_fk_id_teacher_fkey`;

-- AlterTable
ALTER TABLE `modules` DROP COLUMN `fk_id_teacher`,
    MODIFY `teachersId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `modules` ADD CONSTRAINT `modules_teachersId_fkey` FOREIGN KEY (`teachersId`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
