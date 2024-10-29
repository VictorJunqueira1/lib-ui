import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
    return (
        <Accordion type="single" collapsible className="mt-8 space-y-2 text-left">
            <AccordionItem value="item-1" className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4">
                <AccordionTrigger>Como posso começar a usar o InnoTech UI?</AccordionTrigger>
                <AccordionContent>
                    Você pode copiar o código dos componentes diretamente deste local e integrá-los ao seu projeto. Não há necessidade de instalação como dependência.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4">
                <AccordionTrigger>Posso personalizar os componentes?</AccordionTrigger>
                <AccordionContent>
                    Sim! Todos os componentes são totalmente personalizáveis. Sinta-se à vontade para modificar o código conforme suas necessidades.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4">
                <AccordionTrigger>O InnoTech UI é compatível com acessibilidade?</AccordionTrigger>
                <AccordionContent>
                    Sim! Nossa biblioteca é projetada com práticas de acessibilidade em mente, seguindo diretrizes como WAI-ARIA.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4">
                <AccordionTrigger>Onde posso encontrar a documentação?</AccordionTrigger>
                <AccordionContent>
                    A documentação está disponível no nosso repositório GitHub. Ela inclui guias de uso, exemplos e melhores práticas.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4">
                <AccordionTrigger>Posso contribuir para o projeto?</AccordionTrigger>
                <AccordionContent>
                    Com certeza! Aceitamos contribuições de todos os tipos. Sinta-se à vontade para abrir pull requests ou sugerir melhorias no repositório.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};