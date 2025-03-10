import { Injectable } from "@nestjs/common";

@Injectable()
export class PrivateService {
    getTest() {
        return "general kenobi";
    }
}
