import { Controller, Get, Req } from "@nestjs/common";
import { PrivateService } from "./private.service";
import { ApiHeaders } from "@nestjs/swagger";
import { Request } from "express";

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
    getTest(@Req() request: Request) {
        const accessTimeData = request["accessTime"];

        return {
            message: this.privateService.getTest(),
            address: accessTimeData.signerAddress,
            expiryTimestamp: accessTimeData.accessTimeExpiry,
            remainingTime: accessTimeData.remainingTime,
            expiresAt: new Date(accessTimeData.accessTimeExpiry * 1000).toISOString()
        };
    }
}
