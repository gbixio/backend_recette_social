import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE',
  };

  app.enableCors(corsOptions);

  app.setGlobalPrefix("api/v1")
  const options = new DocumentBuilder()
    .setTitle("LA RECETTE API")
    .setDescription("API rest para la recipe en mongodb")
    .setVersion("1.0")
    .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup("docs", app, document);

  const PORT = (process.env.PORT || 4000);
 await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
bootstrap();
