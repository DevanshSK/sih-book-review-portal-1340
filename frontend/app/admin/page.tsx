import { Separator } from "@/components/ui/separator";
import AddBookForm from "./add-book-form";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Add Books</h3>
        <p className="text-sm text-muted-foreground">
          Here, you can manage all the aspects of the application.
        </p>
      </div>
      <Separator />
      <AddBookForm />
    </div>
  );
}
