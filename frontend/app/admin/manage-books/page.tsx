import { Separator } from "@/components/ui/separator";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Manage Books</h3>
        <p className="text-sm text-muted-foreground">
          You can manage your books here.
        </p>
      </div>
      <Separator />
    </div>
  );
}
