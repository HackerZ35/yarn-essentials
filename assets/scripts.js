function showSection() {
    const sectionType = document.getElementById("section-type").value;
    const sections = document.querySelectorAll(".conversion-section");

    // Hide all sections
    sections.forEach(section => section.style.display = "none");

    // Show the selected section
    document.getElementById(sectionType).style.display = "block";
}

function convertYarnCount() {
    const sectionType = document.getElementById("section-type").value;
    let conversionType;

    // Determine which dropdown to use based on the selected section
    if (sectionType === "direct-to-direct") {
        conversionType = document.getElementById("direct-conversion").value;
    } else if (sectionType === "indirect-to-indirect") {
        conversionType = document.getElementById("indirect-conversion").value;
    } else if (sectionType === "direct-to-indirect") {
        conversionType = document.getElementById("direct-indirect-conversion").value;
    }

    const inputValue = parseFloat(document.getElementById("input-value").value);
    let resultText = "";

    if (isNaN(inputValue)) {
        resultText = "Please enter a valid number.";
    } else {
        switch (conversionType) {
            // Direct to Direct Conversions
            case "tex-to-denier":
                resultText = `Denier: ${inputValue * 9}`;
                break;
            case "denier-to-tex":
                resultText = `Tex: ${inputValue / 9}`;
                break;
            case "tex-to-dtex":
                resultText = `Decitex (dtex): ${inputValue * 10}`;
                break;
            case "dtex-to-tex":
                resultText = `Tex: ${inputValue / 10}`;
                break;
            case "tex-to-mtex":
                resultText = `Millitex (mtex): ${inputValue * 1000}`;
                break;
            case "mtex-to-tex":
                resultText = `Tex: ${inputValue / 1000}`;
                break;
            case "tex-to-ktex":
                resultText = `Kilotex (ktex): ${inputValue / 1000}`;
                break;
            case "ktex-to-tex":
                resultText = `Tex: ${inputValue * 1000}`;
                break;
            case "tex-to-lbs-spy":
                resultText = `Pounds per Spyndle (lbs/spy): ${inputValue * (13167.36 / 453.592)}`;
                break;
            case "lbs-spy-to-tex":
                resultText = `Tex: ${inputValue * (453.592 / 13167.36)}`;
                break;

            // Indirect to Indirect Conversions
            case "Ne-to-Nm":
                resultText = `Metric Count (Nm): ${inputValue * 1.69}`;
                break;
            case "Nm-to-Ne":
                resultText = `English Cotton Count (Ne): ${inputValue / 1.69}`;
                break;
            case "Ne-to-New":
                resultText = `Worsted Count (NeW): ${inputValue * (560 / 840)}`;
                break;
            case "New-to-Ne":
                resultText = `English Cotton Count (Ne): ${inputValue * (840 / 560)}`;
                break;
            case "Ne-to-NeS":
                resultText = `Yorkshire Skein (NeS): ${inputValue * (256 / 840)}`;
                break;
            case "NeS-to-Ne":
                resultText = `English Cotton Count (Ne): ${inputValue * (840 / 256)}`;
                break;
            case "Ne-to-NeL":
                resultText = `Linen Count (NeL): ${inputValue * (300 / 840)}`;
                break;
            case "NeL-to-Ne":
                resultText = `English Cotton Count (Ne): ${inputValue * (840 / 300)}`;
                break;

            // Direct to Indirect Conversions
            case "tex-to-Ne":
                resultText = `English Cotton Count (Ne): ${590.5 / inputValue}`;
                break;
            case "Ne-to-tex":
                resultText = `Tex: ${590.5 / inputValue}`;
                break;
            case "denier-to-Ne":
                resultText = `English Cotton Count (Ne): ${5315 / inputValue}`;
                break;
            case "Ne-to-denier":
                resultText = `Denier: ${5315 / inputValue}`;
                break;
            case "tex-to-New":
                resultText = `Worsted Count (NeW): ${560 / (inputValue * 1.693)}`;
                break;
            case "New-to-tex":
                resultText = `Tex: ${560 / (inputValue * 1.693)}`;
                break;
            case "tex-to-NeS":
                resultText = `Yorkshire Skein (NeS): ${256 / (inputValue * 1.693)}`;
                break;
            case "NeS-to-tex":
                resultText = `Tex: ${256 / (inputValue * 1.693)}`;
                break;
            case "tex-to-NeL":
                resultText = `Linen Count (NeL): ${300 / (inputValue * 1.693)}`;
                break;
            case "NeL-to-tex":
                resultText = `Tex: ${300 / (inputValue * 1.693)}`;
                break;

            default:
                resultText = "Invalid selection.";
        }
    }

    document.getElementById("result").textContent = resultText;
}