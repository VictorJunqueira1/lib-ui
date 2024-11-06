import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HTMLCSSJSIntegration() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Integrando InnoTech UI com HTML, CSS e JavaScript</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Guia de Integração</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    ...
                </CardContent>
            </Card>
        </div>
    )
}