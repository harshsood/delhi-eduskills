import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-center text-2xl font-semibold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Are these programs UGC/AICTE approved?</AccordionTrigger>
            <AccordionContent>
              We highlight approvals per program. Always verify on the official university site. Placeholder copy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you provide EMI or loan assistance?</AccordionTrigger>
            <AccordionContent>We’ll guide you on EMI/loan options where available. Placeholder copy.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I talk to a counselor?</AccordionTrigger>
            <AccordionContent>
              Use the Enquire Now button or book a time slot. You’ll receive confirmation by WhatsApp/email.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
