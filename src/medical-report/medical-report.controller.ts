import { Controller, Post, Body } from '@nestjs/common';
import { MedicalReportService } from './medical-report.service';
import { MedicalReportDTO } from './dto/medical-report.dto';

@Controller('medical-report')
export class MedicalReportController {
  constructor(private readonly medicalReportService: MedicalReportService) {}

  @Post()
  async createReport(@Body() medicalReportDto: MedicalReportDTO) {
    return this.medicalReportService.createMedicalReport(medicalReportDto);
  }
}
