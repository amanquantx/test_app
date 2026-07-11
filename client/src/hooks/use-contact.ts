import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you. Our technical team will review your requirements.",
        variant: "default",
        className: "rounded-none border-l-4 border-accent",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
        className: "rounded-none",
      });
    },
  });
}
