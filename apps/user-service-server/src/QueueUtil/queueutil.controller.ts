import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QueueUtilService } from "./queueutil.service";

@swagger.ApiTags("queueUtils")
@common.Controller("queueUtils")
export class QueueUtilController {
  constructor(protected readonly service: QueueUtilService) {}
}
