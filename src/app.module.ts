import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PublicModule } from "./modules/public/public.module";
import { PrivateModule } from "./modules/private/private.module";

@Module({
    imports: [PublicModule, PrivateModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
