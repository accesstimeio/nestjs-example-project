import { Controller, Get, UseGuards } from "@nestjs/common";
import { PublicService } from "./public.service";
import { PrivateService } from "../private/private.service";
import { AccessTimeGuard } from "nestjs-accesstime";
import { ApiHeaders } from "@nestjs/swagger";

@Controller("public")
export class PublicController {
    constructor(
        private readonly publicService: PublicService,
        private readonly privateService: PrivateService
    ) {}

    @Get("/test")
    getTest() {
        return this.publicService.getTest();
    }

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
    @UseGuards(AccessTimeGuard)
    @Get("/private-test")
    getPrivateTest() {
        return this.privateService.getTest();
    }
}
