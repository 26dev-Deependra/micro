import { SectionTitle } from "../../components/SectionTitle";
import CvTools from "./components/CvTools";
import SemTools from "./components/SemTools";

export default function pricing() {
  return (
    <div className="p-10 ">
      <SectionTitle preTitle="tool-1" title="CV-Spec">
        CV-Spec features two tools: one for predicting the optical density (OD)
        of a given CV microscopic image and another for generating a CV image
        based on an OD value.
      </SectionTitle>

      <CvTools />

      <SectionTitle preTitle="tool-2" title="Sem-Spec">
        Sem-spec features two tools: one for predicting the optical density (OD)
        of a given SEM microscopic image and another for generating a SEM image
        based on an OD value.
      </SectionTitle>

      <SemTools />
    </div>
  );
}
