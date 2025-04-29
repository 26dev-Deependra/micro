import Link from "next/link";

export default function PublicationList() {
  const publications = [
    {
      title:
        "Interrogating Salmonella Typhi biofilm formation and dynamics to understand antimicrobial resistance",
      file: "https://www.sciencedirect.com/science/article/abs/pii/S0024320524000079",
    },
    {
      title:
        "Molecular drilling to combat salmonella typhi biofilm using L-Asparaginase via multiple targeting process",
      file: "https://pubmed.ncbi.nlm.nih.gov/38639582/",
    },
    {
      title:
        "Deciphering Target Protein Cascade in Salmonella typhi Biofilm using Genomic Data Mining, and Protein-protein Interaction",
      file: "https://pubmed.ncbi.nlm.nih.gov/37994324/",
    },
    {
      title:
        "Development of the dynamic approach for detection of Salmonella Typhi biofilm via optimizations of interaction with safranin dye",
      file: "https://link.springer.com/article/10.1007/s11756-024-01716-3",
    },
    {
      title:
        "Substantial relation between the bacterial biofilm and oncogenesis progression in host",
      file: "https://www.sciencedirect.com/science/article/abs/pii/S0882401022005794",
    },
    {
      title:
        "Salmonella typhi induced oncogenesis in gallbladder cancer: Co-relation and progression",
      file: "https://www.sciencedirect.com/science/article/pii/S2667394022000065",
    },
    {
      title:
        "Resistance-proof antimicrobial drug discovery to combat global antimicrobial resistance threat",
      file: "https://pubmed.ncbi.nlm.nih.gov/36455341/",
    },
    {
      title:
        "Combinatorial therapeutic enzymes to combat multidrug resistance in bacteria",
      file: "https://www.sciencedirect.com/science/article/abs/pii/S0024320524005101",
    },
  ];

  return (
    <div className="flex-1 p-2 bg-white dark:bg-trueGray-900 ">
      <hr className="my-4  dark:border-gray-600" />

      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index}>
            <Link
              href={pub.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {pub.title}
            </Link>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
          </li>
        ))}
      </ul>
    </div>
  );
}
