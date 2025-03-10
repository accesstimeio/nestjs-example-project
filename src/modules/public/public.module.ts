import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PublicController } from "./public.controller";
import { PublicService } from "./public.service";

@Module({
    imports: [],
    controllers: [PublicController],
    providers: [PublicService],
    exports: []
})
export class PublicModule implements NestModule {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure(consumer: MiddlewareConsumer) {}
}
