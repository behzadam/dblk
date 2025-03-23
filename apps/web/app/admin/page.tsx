import { Button } from "@workspace/ui/components/button";
import { getTranslations } from "next-intl/server";

export default async function AdminPage() {
  const t = await getTranslations();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{t("common.welcome")}</h1>
        <Button size="sm">Button Admin</Button>
      </div>
    </div>
  );
}
