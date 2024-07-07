import { Module } from "@nestjs/common";
import { DampingModule } from "./damping/damping.module";
import { LengthModule } from "./length/length.module";
import { TimeModule } from "./time/time.module";
import { MassModule } from "./mass/mass.module";
import { DriveAmplitudeModule } from "./driveAmplitude/driveAmplitude.module";
import { GravityModule } from "./gravity/gravity.module";
import { DriveFrequencyModule } from "./driveFrequency/driveFrequency.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DampingModule,
    LengthModule,
    TimeModule,
    MassModule,
    DriveAmplitudeModule,
    GravityModule,
    DriveFrequencyModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
