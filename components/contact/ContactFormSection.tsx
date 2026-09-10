'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactToggle from './ContactToggle';
import CompanyForm from './CompanyForm';
import CandidateForm from './CandidateForm';

export default function ContactFormSection() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<'company' | 'candidate'>(() =>
    searchParams.get('type') === 'candidate' ? 'candidate' : 'company',
  );

  return (
    <div>
      <ContactToggle value={formType} onChange={setFormType} className="mb-8" />
      {formType === 'company' ? <CompanyForm /> : <CandidateForm />}
    </div>
  );
}
