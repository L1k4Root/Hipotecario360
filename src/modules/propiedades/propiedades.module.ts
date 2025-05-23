import { Module } from '@nestjs/common';
import { PropiedadesService } from './propiedades.service';
import { PropiedadesController } from './propiedades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Property])], // 👈 clave
  controllers: [PropiedadesController],
  providers: [PropiedadesService],
  exports: [PropiedadesService],
})
export class PropiedadesModule {}
