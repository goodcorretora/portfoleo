import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ProjetoModule } from './projeto/projeto.module';
@Module({
  controllers: [AppController],
  imports: [DbModule, TecnologiaModule, ProjetoModule],
})
export class AppModule {}
