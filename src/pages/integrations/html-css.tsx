'use client'

import "@/app/globals.css"
import Sidebar from "@/pages/docs/components/Sidebar"
import MainLayout from "@/components/MainLayout"
import React, { useState } from "react"

export default function HtmlCSS() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(
            `// HTML, CSS e JavaScript Example
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Código</title>
    <style>
        body { background-color: #333; color: #fff; }
    </style>
</head>
<body>
    <h1>Exemplo de Código</h1>
    <p>Este é um exemplo de integração com HTML, CSS e JavaScript.</p>
</body>
</html>
`
        )
        alert("Código copiado!")
    }

    return (
        <MainLayout>
            <main className="flex-1 overflow-y-auto">
                <h1 className="text-3xl mb-12">Guia de Integração - HTML5, CSS3 e JavaScript</h1>
                <h1 className="text-xl mb-4">Exemplo do componente:</h1>
                <div className="max-w-7xl mx-auto bg-gray-800 px-2 py-4">
                    <Sidebar>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium praesentium nulla reiciendis, expedita ea ex quasi quo veniam asperiores et quam ullam nobis? Sed quisquam necessitatibus eveniet facere alias provident.
                    </Sidebar>
                </div>
                <div className="mx-auto bg-gray-900 text-white rounded-lg shadow-md p-6 mt-6 relative">
                    
                </div>
            </main>
        </MainLayout>
    )
}