import { Injectable } from "@nestjs/common";

@Injectable()
export class PublicService {
    getTest() {
        return "hello there";
    }
}
