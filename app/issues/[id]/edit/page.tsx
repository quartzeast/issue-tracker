import prisma from '@/app/lib/prisma';
import { notFound } from 'next/navigation';
import EditIssueFormWrapper from '../../_components/IssueFormWrapper';

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <EditIssueFormWrapper issue={issue} />;
};

export default EditIssuePage;
