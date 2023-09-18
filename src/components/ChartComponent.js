import React, { useEffect, useRef } from "react";

const LineChart = ({ data, width, height }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const xPadding = 30;
        const yPadding = 30;

        // Calculer les valeurs minimales et maximales des données
        const minValue = Math.min(...data);
        const maxValue = Math.max(...data);

        // Dessiner les axes X et Y
        ctx.beginPath();
        ctx.moveTo(xPadding, yPadding);
        ctx.lineTo(xPadding, height - yPadding);
        ctx.lineTo(width - xPadding, height - yPadding);
        ctx.stroke();

        // Dessiner les étiquettes de l'axe X
        const xLabelSpacing = (width - 2 * xPadding) / (data.length - 1);
        for (let i = 0; i < data.length; i++) {
            const x = xPadding + i * xLabelSpacing;
            ctx.fillText(i + 1, x, height - yPadding / 2);
        }

        // Dessiner les étiquettes de l'axe Y
        const yLabelSpacing = (height - 2 * yPadding) / 5;
        for (let i = 0; i <= 5; i++) {
            const y = height - yPadding - i * yLabelSpacing;
            const label = Math.round(minValue + (maxValue - minValue) * (i / 5));
            ctx.fillText(label, xPadding / 2, y);
        }

        // Dessiner le graphique de ligne
        ctx.beginPath();
        ctx.moveTo(xPadding, height - yPadding);
        const xStep = (width - 2 * xPadding) / (data.length - 1);
        for (let i = 0; i < data.length; i++) {
            const x = xPadding + i * xStep;
            const y = height - yPadding - ((data[i] - minValue) / (maxValue - minValue)) * (height - 2 * yPadding);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }, [data, width, height]);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default LineChart;
