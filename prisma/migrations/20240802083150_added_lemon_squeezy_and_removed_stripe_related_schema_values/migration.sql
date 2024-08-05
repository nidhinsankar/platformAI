/*
  Warnings:

  - You are about to drop the column `stripeSubscriptionStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_current_period_end` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_customer_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_price_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_subscription_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[payment_sucess_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[invoice_url]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_stripe_customer_id_key";

-- DropIndex
DROP INDEX "User_stripe_subscription_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "stripeSubscriptionStatus",
DROP COLUMN "stripe_current_period_end",
DROP COLUMN "stripe_customer_id",
DROP COLUMN "stripe_price_id",
DROP COLUMN "stripe_subscription_id",
ADD COLUMN     "invoice_url" TEXT,
ADD COLUMN     "lemonSqueezyCustomerId" TEXT,
ADD COLUMN     "lemonSqueezyPaymentRenewal" TIMESTAMP(3),
ADD COLUMN     "lemonSqueezyPaymentTotal" TEXT,
ADD COLUMN     "lemonSqueezySubscriptionId" TEXT,
ADD COLUMN     "lemonSqueezySubscriptionStatus" TEXT,
ADD COLUMN     "payment_sucess_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_payment_sucess_id_key" ON "User"("payment_sucess_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_invoice_url_key" ON "User"("invoice_url");
