import { Controller } from "@nestjs/common";
import { PrivateService } from "./private.service";

@Controller("private")
export class PrivateController {
    constructor(private readonly privateService: PrivateService) {}
}
