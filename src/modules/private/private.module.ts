import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrivateController } from "./private.controller";
import { PrivateService } from "./private.service";
import { AccessTimeMiddleware, AccessTimeModule } from "nestjs-accesstime";

@Module({
    imports: [
        AccessTimeModule.register({
            chain: {
                id: 84532
            },
            contractAddress: "0xb57527fe48680f4648873ae6fec84b3837317c54", // accessTimeId: 0,
            minRemainingTime: 60
        })
    ],
    controllers: [PrivateController],
    providers: [PrivateService],
    exports: [PrivateService]
})
export class PrivateModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AccessTimeMiddleware).forRoutes(PrivateController);
    }
}
