-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_system_id_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "system_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_system_id_fkey" FOREIGN KEY ("system_id") REFERENCES "System"("id") ON DELETE SET NULL ON UPDATE CASCADE;
