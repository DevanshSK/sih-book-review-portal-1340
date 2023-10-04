"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Book name must be at least 2 characters.",
  }),
  // auther: z.string().min(2, {
  //   message: "Author name must be at least 2 characters.",
  // }),
  // publisher: z
  //   .string({
  //     required_error: "Author name must be required",
  //   })
  //   .min(2, {
  //     message: "Author name must be at least 2 characters.",
  //   }),
  // number_of_pages: z.number({
  //   required_error: "Pages must be required",
  // }),
});

const AddBookForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      // auther: "",
      // publisher: "",
      // number_of_pages: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is book Display name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddBookForm;

// import Link from "next/link";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useFieldArray, useForm } from "react-hook-form";
// import * as z from "zod";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";

// const profileFormSchema = z.object({
//   username: z
//     .string()
//     .min(2, {
//       message: "Username must be at least 2 characters.",
//     })
//     .max(30, {
//       message: "Username must not be longer than 30 characters.",
//     }),
//   email: z
//     .string({
//       required_error: "Please select an email to display.",
//     })
//     .email(),
//   bio: z.string().max(160).min(4),
//   urls: z
//     .array(
//       z.object({
//         value: z.string().url({ message: "Please enter a valid URL." }),
//       })
//     )
//     .optional(),
// });

// type ProfileFormValues = z.infer<typeof profileFormSchema>;

// // This can come from your database or API.
// const defaultValues: Partial<ProfileFormValues> = {
//   bio: "I own a computer.",
//   urls: [
//     { value: "https://shadcn.com" },
//     { value: "http://twitter.com/shadcn" },
//   ],
// };

// export default function AddBookForm() {
//   const form = useForm<ProfileFormValues>({
//     resolver: zodResolver(profileFormSchema),
//     defaultValues,
//     mode: "onChange",
//   });

//   const { fields, append } = useFieldArray({
//     name: "urls",
//     control: form.control,
//   });

//   function onSubmit(data: ProfileFormValues) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name. It can be your real name or a
//                 pseudonym. You can only change this once every 30 days.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="m@example.com">m@example.com</SelectItem>
//                   <SelectItem value="m@google.com">m@google.com</SelectItem>
//                   <SelectItem value="m@support.com">m@support.com</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormDescription>
//                 You can manage verified email addresses in your{" "}
//                 <Link href="/examples/forms">email settings</Link>.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="bio"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Bio</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Tell us a little bit about yourself"
//                   className="resize-none"
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription>
//                 You can <span>@mention</span> other users and organizations to
//                 link to them.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div>
//           {fields.map((field, index) => (
//             <FormField
//               control={form.control}
//               key={field.id}
//               name={`urls.${index}.value`}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className={cn(index !== 0 && "sr-only")}>
//                     URLs
//                   </FormLabel>
//                   <FormDescription className={cn(index !== 0 && "sr-only")}>
//                     Add links to your website, blog, or social media profiles.
//                   </FormDescription>
//                   <FormControl>
//                     <Input {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           ))}
//           <Button
//             type="button"
//             variant="outline"
//             size="sm"
//             className="mt-2"
//             onClick={() => append({ value: "" })}
//           >
//             Add URL
//           </Button>
//         </div>
//         <Button type="submit">Update profile</Button>
//       </form>
//     </Form>
//   );
// }
