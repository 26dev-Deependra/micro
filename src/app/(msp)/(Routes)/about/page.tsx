import { SectionTitle } from "../../components/SectionTitle";
import { Testimonials } from "../../components/Testimonials";
export default function about() {
  return (
    <div className="p-4">
      <SectionTitle preTitle="" title="Who We Are ?">
        We are a team of three from National Institute of Technology , Raipur
        working on MicroSpec which is an attempt to introduce machine learning
        analytics to the biofillm kinetics thus providing a before hand standard
        for microbial biofilms.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="" title="Aim And Objectives">
        We aim to provide a machine learning powered analytical tool for
        microbial biofilms. Initailly our tools are limited to Salmonella Typhi
        and we have objectives to extend them to other types of bacteria and
        Fungi.
      </SectionTitle>
    </div>
  );
}
