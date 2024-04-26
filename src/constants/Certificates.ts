import { Certificate } from "../models/Certificate";
import SqlDs from "../assets/images/certificates/sql-data-sci.png";
import CsUnitySpec from "../assets/images/certificates/cs-unity-spec.jpeg";
import CppUnrealSpec from "../assets/images/certificates/cpp-unreal-spec.jpeg";

const SQL_DS: Certificate = {
  name: "SQL for Data Science",
  url: "https://www.coursera.org/account/accomplishments/certificate/U9DEVGUCQ92Y",
  imgPath: SqlDs,
};

const CS_UNITY_SPEC: Certificate = {
  name: "C# Programming for Unity Game Development Specialization",
  url: "https://www.coursera.org/account/accomplishments/specialization/M3X5F6HTAJQD",
  imgPath: CsUnitySpec,
};

const CPP_UNREAL_SPEC: Certificate = {
  name: "C++ Programming for Unreal Game Development Specialization",
  url: "https://www.coursera.org/account/accomplishments/specialization/VQ4YXVMHGWBX",
  imgPath: CppUnrealSpec,
};

export const Certificates: Certificate[] = [
  SQL_DS,
  CS_UNITY_SPEC,
  CPP_UNREAL_SPEC,
];
