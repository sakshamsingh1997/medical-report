import { IsString, IsArray, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class MedicalExaminationDetailsDTO {
  @IsString() question: string;
  @IsString() questionCode: string;
  @IsString() questionSet: string;
  @IsString() answer: string;
  @IsString() details: string;
}

export class TestResultsDTO {
  @IsString() testId: string;
  @IsString() testName: string;
  @IsString() limit: string;
  @IsString() loincCode: string;
  @IsString() max_range: string;
  @IsString() min_range: string;
  @IsString() ranges: string;
  @IsString() recommendation: string;
  @IsString() remarks: string;
  @IsString() resultValue: string;
  @IsString() testPerformedDate: string;
  @IsString() testResultNotes: string;
  @IsString() testcomponent: string;
  @IsString() testtype: string;
  @IsString() unitOfMeasurement: string;
}

export class MedicalReportDTO {
  @IsString() MasterPolicyNo: string;
  @IsString() appointmentId: string;
  @IsString() Name: string;
  @IsString() DOB: string;
  @IsString() Gender: string;
  @IsBoolean() isGenderfemale: boolean;
  @IsString() ContactNo: string;
  @IsString() Email: string;
  @IsNumber() InsID: number;

  // Newly added fields
  @IsString() MedCat: string;
  @IsString() taCode: string;
  @IsString() dcCity: string;
  @IsString() dcPan: string;
  @IsString() dcName: string;
  @IsString() dcState: string;
  @IsString() requestDateTpa: string;
  @IsString() apptDate: string;
  @IsString() reportCloserUploadDate: string;
  @IsString() blood_haemoglobinResult: string;
  @IsString() blood_rbcResult: string;
  @IsString() blood_wbcResult: string;
  @IsString() blood_mcvResult: string;
  @IsString() blood_plateletsResult: string;
  @IsString() blood_esrResult: string;
  @IsString() mer_isPregnant: string;
  @IsString() mer_monthsOfPregnancy: string;
  @IsString() mer_complicationsPregnancy: string;
  @IsString() mer_descOfComplication: string;
  @IsString() mer_undergoneMammogramUltrasound: string;
  @IsString() mer_reportsNormal: string;
  @IsString() mer_descOfProblem: string;

  @IsArray() medicalExaminationDetails: MedicalExaminationDetailsDTO[];
  @IsArray() testResults: TestResultsDTO[];

  @IsNotEmpty() ctmtReportDetails: any;
  @IsNotEmpty() ecgReportDetails: any;
}
