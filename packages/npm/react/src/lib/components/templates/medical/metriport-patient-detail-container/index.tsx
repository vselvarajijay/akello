import React, { useEffect } from "react"
import { PatientSession } from "../../../organisms/medical"
import { PatientDetail } from "../../../organisms/medical/patient-detail"
import { Switch } from '@mantine/core';
import { SessionBtn } from "../../../atoms/medical/session-btn";
import { PatientInfoCard } from "../../../atoms/medical/patient-info-card";
import { RegistryTreatment } from "@akello/core";
import { Tabs } from '@mantine/core';
import { PatientSessionStepper } from "../../../molecules";
import { PatientTimeLog } from "../../../organisms/medical";
import { MeasureTypes } from "@akello/core";
import { PatientProgress } from "../../../organisms/medical/patient-progress";
import { LineChart } from "../../../atoms/insights/line-chart";

export interface MetriportPatientDetailContainerProps {
    selectedPatient: RegistryTreatment
    registry_id: string
}

export const MetriportPatientDetailContainer: React.FC<MetriportPatientDetailContainerProps> = ({selectedPatient, registry_id}) => {


    return (
        <div>
            <div>
                NLP Processor
            </div>
            <div>
                <LineChart title='NLP Score' xAxis={[1, 2, 3, 5, 8, 10] } data={[2, 5.5, 2, 8.5, 1.5, 5]} />
            </div>
            <div>
                MRN: {selectedPatient.mrn}
            </div>
        </div>
    )
}
