-- DropIndex
DROP INDEX `Logs_user_id_fkey` ON `logs`;

-- AlterTable
ALTER TABLE `users` MODIFY `image_url` TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
