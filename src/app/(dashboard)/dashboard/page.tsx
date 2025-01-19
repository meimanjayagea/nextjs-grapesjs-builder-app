'use client';
import StudioEditor from '@/components/StudioEditorBuilder'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function Home() {


  return (
    <Card>
      <CardHeader>
        <CardTitle>Builder APP</CardTitle>
        <CardDescription>Create a new project to build a website or homepage application.</CardDescription>
          <StudioEditor />
      </CardHeader>
      <CardContent />
    </Card>
  );
}
