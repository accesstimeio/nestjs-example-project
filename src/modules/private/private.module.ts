import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrivateController } from "./private.controller";
import { PrivateService } from "./private.service";

@Module({
    imports: [],
    controllers: [PrivateController],
    providers: [PrivateService],
    exports: []
})
export class PrivateModule implements NestModule {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure(consumer: MiddlewareConsumer) {}
}
