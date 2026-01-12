export interface JobRole {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  expectedSalary: string;
  reasonToHire: string;
  resume?: File | null;
  role: string;
  appliedAt: string;
}
