import { Injectable } from '@nestjs/common';
import { DatabaseService } from './config/database.service';
import { MedicalReportDTO } from './dto/medical-report.dto';
import * as sql from 'mssql';

@Injectable()
export class MedicalReportService {
  constructor(private readonly dbService: DatabaseService) {}

  async createMedicalReport(data: MedicalReportDTO): Promise<any> {
    const {
      MasterPolicyNo,
      appointmentId,
      Name,
      DOB,
      Gender,
      isGenderfemale,
      ContactNo,
      Email,
      InsID,
      MedCat,
      taCode,
      dcCity,
      dcPan,
      dcName,
      dcState,
      requestDateTpa,
      apptDate,
      reportCloserUploadDate,
      blood_haemoglobinResult,
      blood_rbcResult,
      blood_wbcResult,
      blood_mcvResult,
      blood_plateletsResult,
      blood_esrResult,
      mer_isPregnant,
      mer_monthsOfPregnancy,
      mer_complicationsPregnancy,
      mer_descOfComplication,
      mer_undergoneMammogramUltrasound,
      mer_reportsNormal,
      mer_descOfProblem,
      medicalExaminationDetails,
      ctmtReportDetails,
      ecgReportDetails,
      testResults,
    } = data;

    // Insert into tbl_medical_report_data
    const reportQuery = `
    INSERT INTO tbl_medical_report_data
    (MasterPolicyNo, AppointmentId, Name, DOB, Gender, isGenderfemale, ContactNo, Email, InsID, MedCat, taCode, dcCity, dcPan, dcName, dcState, requestDateTpa, apptDate, reportCloserUploadDate, blood_haemoglobinResult, blood_rbcResult, blood_wbcResult, blood_mcvResult, blood_plateletsResult, blood_esrResult, mer_isPregnant, mer_monthsOfPregnancy, mer_complicationsPregnancy, mer_descOfComplication, mer_undergoneMammogramUltrasound, mer_reportsNormal, mer_descOfProblem, ctmt_Bruce_Protocol_used, ctmt_Weight, ctmt_Minimum_exercise_time, ctmt_Total_Exercise_Time, ctmt_Is_THR_achieved, ctmt_Reason_for_Termination_of_Exercise_ECG, ctmt_Any_ST_Changes_Noted, ctmt_ST_Segment, ctmt_Any_Arrhythmia_Noted, ctmt_R_wave_Progression, ctmt_Rhythm, ctmt_MET_Score_Achieved, ctmt_Standardization, ctmt_Q_wave, ctmt_Remark, ctmt_Bundle_Branch_Blocks, ctmt_Max_Diastolic_Pressure, ctmt_Max_Systolic_Pressure, ctmt_Supine, ctmt_Standing, ctmt_Hyperventilation, ctmt_Stage_1, ctmt_Stage_2, ctmt_Stage_3, ctmt_Recovery_1_at_1_mins, ctmt_Recovery_2_at_3_mins, ctmt_Recovery_3_at_6_mins, ctmt_Max_BP, ctmt_Peak_Exercise, ctmt_WNL, ctmt_NWNL, ctmt_Percentage_of_THR_achieved, ctmt_Max_HR, ecg_Bruce_Protocol_used, ecg_rate, ecg_Speed, ecg_Rhythm, ecg_P_Wave, ecg_Q_Wave, ecg_PR, ecg_ST_Segment, ecg_Bundle_Branch_Blocks, ecg_QRS, ecg_Voltage, ecg_Mechanism, ecg_Axis, ecg_Any_ST_Changes_Noted, ecg_Any_Arrhythmia_Noted, ecg_R_wave_progression, ecg_Clinical_History, ecg_QT_Interval, ecg_ECG_Findings)
    VALUES 
    (@MasterPolicyNo, @AppointmentId, @Name, @DOB, @Gender, @isGenderfemale, @ContactNo, @Email, @InsID, @MedCat, @taCode, @dcCity, @dcPan, @dcName, @dcState, @requestDateTpa, @apptDate, @reportCloserUploadDate, @blood_haemoglobinResult, @blood_rbcResult, @blood_wbcResult, @blood_mcvResult, @blood_plateletsResult, @blood_esrResult, @mer_isPregnant, @mer_monthsOfPregnancy, @mer_complicationsPregnancy, @mer_descOfComplication, @mer_undergoneMammogramUltrasound, @mer_reportsNormal, @mer_descOfProblem, @ctmtBruceProtocol, @ctmtWeight, @ctmtMinExerciseTime, @ctmtTotalExerciseTime, @ctmtTHRAchieved, @ctmtReasonForTermination, @ctmtAnySTChanges, @ctmtSTSegment, @ctmtAnyArrhythmia, @ctmtRWaveProgression, @ctmtRhythm, @ctmtMETScore, @ctmtStandardization, @ctmtQWave, @ctmtRemark, @ctmtBundleBranchBlocks, @ctmtMaxDiastolicPressure, @ctmtMaxSystolicPressure, @ctmtSupine, @ctmtStanding, @ctmtHyperventilation, @ctmtStage1, @ctmtStage2, @ctmtStage3, @ctmtRecovery1Min, @ctmtRecovery3Min, @ctmtRecovery6Min, @ctmtMaxBP, @ctmtPeakExercise, @ctmtWNL, @ctmtNWNL, @ctmtPercentageTHRAchieved, @ctmtMaxHR, @ecgBruceProtocol, @ecgRate, @ecgSpeed, @ecgRhythm, @ecgPWave, @ecgQWave, @ecgPR, @ecgSTSegment, @ecgBundleBranchBlocks, @ecgQRS, @ecgVoltage, @ecgMechanism, @ecgAxis, @ecgAnySTChanges, @ecgAnyArrhythmia, @ecgRWaveProgression, @ecgClinicalHistory, @ecgQTInterval, @ecgFindings)
  `;

    await this.dbService.query(reportQuery, [
      { name: 'MasterPolicyNo', type: sql.VarChar, value: MasterPolicyNo },
      { name: 'AppointmentId', type: sql.VarChar, value: appointmentId },
      { name: 'Name', type: sql.VarChar, value: Name },
      { name: 'DOB', type: sql.VarChar, value: DOB },
      { name: 'Gender', type: sql.VarChar, value: Gender },
      { name: 'isGenderfemale', type: sql.Bit, value: isGenderfemale },
      { name: 'ContactNo', type: sql.VarChar, value: ContactNo },
      { name: 'Email', type: sql.VarChar, value: Email },
      { name: 'InsID', type: sql.Int, value: InsID },
      { name: 'MedCat', type: sql.VarChar, value: MedCat },
      { name: 'taCode', type: sql.VarChar, value: taCode },
      { name: 'dcCity', type: sql.VarChar, value: dcCity },
      { name: 'dcPan', type: sql.VarChar, value: dcPan },
      { name: 'dcName', type: sql.VarChar, value: dcName },
      { name: 'dcState', type: sql.VarChar, value: dcState },
      { name: 'requestDateTpa', type: sql.VarChar, value: requestDateTpa },
      { name: 'apptDate', type: sql.VarChar, value: apptDate },
      { name: 'reportCloserUploadDate', type: sql.VarChar, value: reportCloserUploadDate },
      { name: 'blood_haemoglobinResult', type: sql.VarChar, value: blood_haemoglobinResult },
      { name: 'blood_rbcResult', type: sql.VarChar, value: blood_rbcResult },
      { name: 'blood_wbcResult', type: sql.VarChar, value: blood_wbcResult },
      { name: 'blood_mcvResult', type: sql.VarChar, value: blood_mcvResult },
      { name: 'blood_plateletsResult', type: sql.VarChar, value: blood_plateletsResult },
      { name: 'blood_esrResult', type: sql.VarChar, value: blood_esrResult },
      { name: 'mer_isPregnant', type: sql.VarChar, value: mer_isPregnant },
      { name: 'mer_monthsOfPregnancy', type: sql.VarChar, value: mer_monthsOfPregnancy },
      { name: 'mer_complicationsPregnancy', type: sql.VarChar, value: mer_complicationsPregnancy },
      { name: 'mer_descOfComplication', type: sql.VarChar, value: mer_descOfComplication },
      { name: 'mer_undergoneMammogramUltrasound', type: sql.VarChar, value: mer_undergoneMammogramUltrasound },
      { name: 'mer_reportsNormal', type: sql.VarChar, value: mer_reportsNormal },
      { name: 'mer_descOfProblem', type: sql.VarChar, value: mer_descOfProblem },
      // ctmtReportDetails
      { name: 'ctmtBruceProtocol', type: sql.VarChar, value: ctmtReportDetails['Bruce Protocol used?'] },
      { name: 'ctmtWeight', type: sql.VarChar, value: ctmtReportDetails['Weight'] },
      { name: 'ctmtMinExerciseTime', type: sql.VarChar, value: ctmtReportDetails['Minimum exercise time'] },
      { name: 'ctmtTotalExerciseTime', type: sql.VarChar, value: ctmtReportDetails['Total Exercise Time'] },
      { name: 'ctmtTHRAchieved', type: sql.VarChar, value: ctmtReportDetails['Is THR achieved?'] },
      { name: 'ctmtReasonForTermination', type: sql.VarChar, value: ctmtReportDetails['Reason for Termination of Exercise ECG'] },
      { name: 'ctmtAnySTChanges', type: sql.VarChar, value: ctmtReportDetails['Any ST Changes Noted?'] },
      { name: 'ctmtSTSegment', type: sql.VarChar, value: ctmtReportDetails['ST Segment'] },
      { name: 'ctmtAnyArrhythmia', type: sql.VarChar, value: ctmtReportDetails['Any Arrhythmia Noted?'] },
      { name: 'ctmtRWaveProgression', type: sql.VarChar, value: ctmtReportDetails['R wave Progression'] },
      { name: 'ctmtRhythm', type: sql.VarChar, value: ctmtReportDetails['Rhythm'] },
      { name: 'ctmtMETScore', type: sql.VarChar, value: ctmtReportDetails['MET Score Achieved'] },
      { name: 'ctmtStandardization', type: sql.VarChar, value: ctmtReportDetails['Standardization/Speed'] },
      { name: 'ctmtQWave', type: sql.VarChar, value: ctmtReportDetails['Q wave'] },
      { name: 'ctmtRemark', type: sql.VarChar, value: ctmtReportDetails['Remark/Findings'] },
      { name: 'ctmtBundleBranchBlocks', type: sql.VarChar, value: ctmtReportDetails['Bundle Branch Blocks'] },
      { name: 'ctmtMaxDiastolicPressure', type: sql.VarChar, value: ctmtReportDetails['Max. Diastolic Pressure'] },
      { name: 'ctmtMaxSystolicPressure', type: sql.VarChar, value: ctmtReportDetails['Max. Systolic Pressure'] },
      { name: 'ctmtSupine', type: sql.VarChar, value: ctmtReportDetails['Supine'] },
      { name: 'ctmtStanding', type: sql.VarChar, value: ctmtReportDetails['Standing'] },
      { name: 'ctmtHyperventilation', type: sql.VarChar, value: ctmtReportDetails['Hyperventilation'] },
      { name: 'ctmtStage1', type: sql.VarChar, value: ctmtReportDetails['Stage 1'] },
      { name: 'ctmtStage2', type: sql.VarChar, value: ctmtReportDetails['Stage 2'] },
      { name: 'ctmtStage3', type: sql.VarChar, value: ctmtReportDetails['Stage 3'] },
      { name: 'ctmtRecovery1Min', type: sql.VarChar, value: ctmtReportDetails['Recovery 1 at 1 mins'] },
      { name: 'ctmtRecovery3Min', type: sql.VarChar, value: ctmtReportDetails['Recovery 2 at 3 mins'] },
      { name: 'ctmtRecovery6Min', type: sql.VarChar, value: ctmtReportDetails['Recovery 3 at 6 mins'] },
      { name: 'ctmtMaxBP', type: sql.VarChar, value: ctmtReportDetails['Max BP'] },
      { name: 'ctmtPeakExercise', type: sql.VarChar, value: ctmtReportDetails['Peak Exercise'] },
      { name: 'ctmtWNL', type: sql.VarChar, value: ctmtReportDetails['WNL'] },
      { name: 'ctmtNWNL', type: sql.VarChar, value: ctmtReportDetails['NWNL'] },
      { name: 'ctmtPercentageTHRAchieved', type: sql.VarChar, value: ctmtReportDetails['Percentage of THR achieved'] },
      { name: 'ctmtMaxHR', type: sql.VarChar, value: ctmtReportDetails['Max HR'] },
      // ecgReportDetails
      { name: 'ecgBruceProtocol', type: sql.VarChar, value: ecgReportDetails['Bruce Protocol used?'] },
      { name: 'ecgRate', type: sql.VarChar, value: ecgReportDetails['rate'] },
      { name: 'ecgSpeed', type: sql.VarChar, value: ecgReportDetails['Speed'] },
      { name: 'ecgRhythm', type: sql.VarChar, value: ecgReportDetails['Rhythm'] },
      { name: 'ecgPWave', type: sql.VarChar, value: ecgReportDetails['P Wave'] },
      { name: 'ecgQWave', type: sql.VarChar, value: ecgReportDetails['Q Wave'] },
      { name: 'ecgPR', type: sql.VarChar, value: ecgReportDetails['PR'] },
      { name: 'ecgSTSegment', type: sql.VarChar, value: ecgReportDetails['ST Segment'] },
      { name: 'ecgBundleBranchBlocks', type: sql.VarChar, value: ecgReportDetails['Bundle Branch Blocks'] },
      { name: 'ecgQRS', type: sql.VarChar, value: ecgReportDetails['QRS'] },
      { name: 'ecgVoltage', type: sql.VarChar, value: ecgReportDetails['Voltage'] },
      { name: 'ecgMechanism', type: sql.VarChar, value: ecgReportDetails['Mechanism'] },
      { name: 'ecgAxis', type: sql.VarChar, value: ecgReportDetails['Axis'] },
      { name: 'ecgAnySTChanges', type: sql.VarChar, value: ecgReportDetails['Any ST Changes Noted'] },
      { name: 'ecgAnyArrhythmia', type: sql.VarChar, value: ecgReportDetails['Any Arrhythmia Noted'] },
      { name: 'ecgRWaveProgression', type: sql.VarChar, value: ecgReportDetails['R wave progression'] },
      { name: 'ecgClinicalHistory', type: sql.VarChar, value: ecgReportDetails['Clinical History'] },
      { name: 'ecgQTInterval', type: sql.VarChar, value: ecgReportDetails['QT Interval'] },
      { name: 'ecgFindings', type: sql.VarChar, value: ecgReportDetails['ECG Findings'] },
    ]);

    // Insert into tbl_medical_question_data
    for (const detail of medicalExaminationDetails) {
      const questionQuery = `
        INSERT INTO tbl_medical_question_data
        (MasterPolicyNo, question, questionCode, questionSet, answer, details)
        VALUES (@MasterPolicyNo, @question, @questionCode, @questionSet, @answer, @details);
      `;
      await this.dbService.query(questionQuery, [
        { name: 'MasterPolicyNo', type: sql.VarChar, value: MasterPolicyNo },
        { name: 'question', type: sql.VarChar, value: detail.question },
        { name: 'questionCode', type: sql.VarChar, value: detail.questionCode },
        { name: 'questionSet', type: sql.VarChar, value: detail.questionSet },
        { name: 'answer', type: sql.VarChar, value: detail.answer },
        { name: 'details', type: sql.VarChar, value: detail.details },
      ]);
    }

    // Insert into tbl_medical_test_data
    for (const test of testResults) {
      const testQuery = `
        INSERT INTO tbl_medical_test_data
        (MasterPolicyNo, testId, testName, limit, loincCode, max_range, min_range, ranges, recommendation, remarks, resultValue, testPerformedDate, testResultNotes, testcomponent, testtype, unitOfMeasurement)
        VALUES (@MasterPolicyNo, @testId, @testName, @limit, @loincCode, @max_range, @min_range, @ranges, @recommendation, @remarks, @resultValue, @testPerformedDate, @testResultNotes, @testcomponent, @testtype, @unitOfMeasurement);
      `;
      await this.dbService.query(testQuery, [
        { name: 'MasterPolicyNo', type: sql.VarChar, value: MasterPolicyNo },
        { name: 'testId', type: sql.VarChar, value: test.testId },
        { name: 'testName', type: sql.VarChar, value: test.testName },
        { name: 'limit', type: sql.VarChar, value: test.limit },
        { name: 'loincCode', type: sql.VarChar, value: test.loincCode },
        { name: 'max_range', type: sql.VarChar, value: test.max_range },
        { name: 'min_range', type: sql.VarChar, value: test.min_range },
        { name: 'ranges', type: sql.VarChar, value: test.ranges },
        { name: 'recommendation', type: sql.VarChar, value: test.recommendation },
        { name: 'remarks', type: sql.VarChar, value: test.remarks },
        { name: 'resultValue', type: sql.VarChar, value: test.resultValue },
        { name: 'testPerformedDate', type: sql.VarChar, value: test.testPerformedDate },
        { name: 'testResultNotes', type: sql.VarChar, value: test.testResultNotes },
        { name: 'testcomponent', type: sql.VarChar, value: test.testcomponent },
        { name: 'testtype', type: sql.VarChar, value: test.testtype },
        { name: 'unitOfMeasurement', type: sql.VarChar, value: test.unitOfMeasurement },
      ]);
    }

    return { message: 'Medical report created successfully' };
  }
}