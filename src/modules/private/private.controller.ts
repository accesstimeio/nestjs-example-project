import { Controller, Get } from "@nestjs/common";
import { PrivateService } from "./private.service";
import { ApiHeaders } from "@nestjs/swagger";

@ApiHeaders([
    {
        name: "X-ACCESSTIME-AUTH-SIGNATURE",
        required: true
    },
    {
        name: "X-ACCESSTIME-AUTH-MESSAGE",
        required: true
    }
])
@Controller("private")
export class PrivateController {
    constructor(private readonly privateService: PrivateService) {}

    @Get("/test")
    getTest() {
        return this.privateService.getTest();
    }
}
