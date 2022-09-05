import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  const config = new DocumentBuilder()
    .setTitle('Api da Biblia')
    .setDescription(
      'Documentação de uso da API da biblia nas traduções de Almeida Revista e Corrigida e King James Atualizada',
    )
    .setVersion('1.0')
    .setContact(
      'Daniel Guirra',
      'https://github.com/danielguirra',
      'daniel.guirra777@gmail.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
