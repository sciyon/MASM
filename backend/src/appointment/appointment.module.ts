// src/appointment/appointment.module.ts
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({ secret: 'yourSecretKey', signOptions: { expiresIn: '60m' } }), // Register JwtModule
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
