import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PublicController } from "./public.controller";
import { PublicService } from "./public.service";
import { PrivateModule } from "../private/private.module";
import { AccessTimeModule } from "nestjs-accesstime";

@Module({
    imports: [
        PrivateModule,
        AccessTimeModule.register({
            chain: {
                id: 84532
            },
            contractAddress: "0xb57527fe48680f4648873ae6fec84b3837317c54", // accessTimeId: 0,
            minRemainingTime: 60
        })
    ],
    controllers: [PublicController],
    providers: [PublicService],
    exports: []
})
export class PublicModule implements NestModule {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure(consumer: MiddlewareConsumer) {}
}
