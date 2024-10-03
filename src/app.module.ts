import { Module } from '@nestjs/common';
import { MedicalReportController } from './medical-report/medical-report.controller';
import { MedicalReportService } from './medical-report/medical-report.service';
import { DatabaseService } from './medical-report//config/database.service';

@Module({
  controllers: [MedicalReportController],
  providers: [MedicalReportService, DatabaseService],
})
export class AppModule {}
