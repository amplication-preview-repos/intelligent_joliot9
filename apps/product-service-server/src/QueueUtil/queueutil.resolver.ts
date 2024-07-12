import * as graphql from "@nestjs/graphql";
import { QueueUtilService } from "./queueutil.service";

export class QueueUtilResolver {
  constructor(protected readonly service: QueueUtilService) {}
}
