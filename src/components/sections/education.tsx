import { AtmiyaSchoolLogo } from "../icons/atmiya-school-logo";
import { MarwadiUniversityLogo } from "../icons/marwadi-logo";

export const EducationSection = () => {
  return (
    <div className="mt-28">
      <h3 className="text-2xl font-semibold relative inline">
        Education
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <div className="flex mt-8 items-center">
        <MarwadiUniversityLogo className="w-12 mr-5 hidden sm:block" />
        <p className="text-secondary-text">
          <strong className="text-primabg-primary-text">
            Diploma, Information & Communication Technology
          </strong>
          <br />
          <span className="text-secondary-text">
            Marwadi University, Rajkot
          </span>
          <br />
          <span className="text-secondary-text text-sm">
            2022 - 2025 | CGPA: 9.34/10
          </span>
        </p>
      </div>

      <div className="flex mt-8 items-center">
        <AtmiyaSchoolLogo className="w-12 mr-5 hidden sm:block" />
        <p className="text-secondary-text">
          <strong className="text-primabg-primary-text">
            GSEB SSC (10th Grade)
          </strong>
          <br />
          <span className="text-secondary-text">
            Atmiya Vidya Sankul, Paddhari
          </span>
          <br />
          <span className="text-secondary-text text-sm">
            2022 | 89.06 Percentile
          </span>
        </p>
      </div>
    </div>
  );
};
