'use client';

import { Issue } from '@prisma/client';
import dynamic from 'next/dynamic';
import IssueFormSkeleton from './IssueFormSkeleton';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface EditIssueFormWrapperProps {
  issue: Issue;
}

const EditIssueFormWrapper = ({ issue }: EditIssueFormWrapperProps) => {
  return <IssueForm issue={issue} />;
};

export default EditIssueFormWrapper;
