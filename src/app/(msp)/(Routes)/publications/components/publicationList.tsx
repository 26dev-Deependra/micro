import Link from "next/link";

export default function PublicationList() {
  const publications = [
    {
      title:
        "Interrogating Salmonella Typhi biofilm formation and dynamics to understand antimicrobial resistance",
      file: "/",
    },
    {
      title:
        "Molecular drilling to combat salmonella typhi biofilm using L-Asparaginase via multiple targeting process",
      file: "/",
    },
    {
      title:
        "Deciphering Target Protein Cascade in Salmonella typhi Biofilm using Genomic Data Mining, and Protein-protein Interaction",
      file: "/",
    },
    {
      title:
        "Development of the dynamic approach for detection of Salmonella Typhi biofilm via optimizations of interaction with safranin dye",
      file: "/",
    },
    {
      title:
        "Substantial relation between the bacterial biofilm and oncogenesis progression in host",
      file: "/",
    },
    {
      title:
        "Salmonella typhi induced oncogenesis in gallbladder cancer: Co-relation and progression",
      file: "/",
    },
    {
      title:
        "Resistance-proof antimicrobial drug discovery to combat global antimicrobial resistance threat",
      file: "/",
    },
    {
      title:
        "Combinatorial therapeutic enzymes to combat multidrug resistance in bacteria",
      file: "/",
    },
    // Add more publications here if needed
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
