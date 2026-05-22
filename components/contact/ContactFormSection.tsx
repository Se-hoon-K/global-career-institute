'use client';

import { useState } from 'react';
import ContactToggle from './ContactToggle';
import CompanyForm from './CompanyForm';
import CandidateForm from './CandidateForm';

export default function ContactFormSection() {
  const [formType, setFormType] = useState<'company' | 'candidate'>('company');

  return (
    <div>
      <ContactToggle value={formType} onChange={setFormType} className="mb-8" />
      {formType === 'company' ? <CompanyForm /> : <CandidateForm />}
    </div>
  );
}
