// NestJS core imports
// Importa el decorador `Module` de NestJS, utilizado para definir un módulo.
import { Module } from '@nestjs/common';

// Importa el módulo de configuración para gestionar variables de entorno y configuración global.
import { ConfigModule } from '@nestjs/config';

// Importa el módulo de integración con TypeORM para la gestión de base de datos.
import { TypeOrmModule } from '@nestjs/typeorm';

// App controllers y servicios
// Importa el controlador principal de la aplicación.
import { AppController } from './app.controller';
// Importa el servicio principal de la aplicación.
import { AppService } from './app.service';

// Módulos de dominio de la aplicación
// Importa el módulo relacionado con la gestión de propiedades.
import { PropiedadesModule } from './modules/propiedades/propiedades.module';
// Importa el módulo relacionado con la gestión de créditos.
import { CreditoModule } from './modules/credito/credito.module';
// Importa el módulo relacionado con la gestión de clientes.
import { ClienteModule } from './modules/cliente/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
      isGlobal: true,
    }),
    ...(process.env.SKIP_DB === 'true'
      ? []
      : [
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
        ]),
    // Importa el módulo de propiedades.
    PropiedadesModule,
    ClienteModule,
    CreditoModule,
    ClienteModule,
    // ProcesoLegalModule,
    // BancoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
