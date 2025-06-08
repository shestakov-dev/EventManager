import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { PrismaClientExceptionFilter } from "./prisma-client-exception-filter/prisma-client-exception.filter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
		})
	);

	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(app.get(Reflector))
	);

	const config = new DocumentBuilder()
		.setTitle("Event Manager API")
		.setDescription("API documentation for the Event Manager application")
		.setVersion("1.0")
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("api", app, document, {
		customSiteTitle: "Event Manager API Docs",
	});

	app.useGlobalFilters(new PrismaClientExceptionFilter());

	app.enableCors();

	await app.listen(process.env.PORT ?? 8393);
}

bootstrap();
