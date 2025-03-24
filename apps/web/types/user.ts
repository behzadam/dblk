export interface UserProps {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  defaultWorkspace?: string;
  provider: string | null;
}
