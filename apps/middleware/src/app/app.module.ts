import * as Modules from '@kleeen/end-product/backend/resolvers';

import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';

const schemaPath = join(process.cwd(), 'apps/middleware/src/graphql/schema.gql');

@Module({
  imports: [
    ...Object.values(Modules),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: schemaPath,
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
