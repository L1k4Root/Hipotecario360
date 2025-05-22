import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PropiedadesModule } from './modules/propiedades/propiedades.module';
import { CreditoModule } from './modules/credito/credito.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true, //! Set to false in production
      }),
    }),
    PropiedadesModule,
    // ClientesModule,
    CreditoModule,
    // ProcesoLegalModule,
    // BancoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
