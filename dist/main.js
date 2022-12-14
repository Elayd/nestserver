"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3333;
    app.enableCors({
        origin: [/^(.*)/],
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
        allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-forwarded-for',
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    console.log(`Hey, server started on port ${PORT}`);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map