import { Module } from "@nestjs/common";
import { QueueUtilService } from "./queueutil.service";
import { QueueUtilController } from "./queueutil.controller";
import { QueueUtilResolver } from "./queueutil.resolver";

@Module({
  controllers: [QueueUtilController],
  providers: [QueueUtilService, QueueUtilResolver],
  exports: [QueueUtilService],
})
export class QueueUtilModule {}
