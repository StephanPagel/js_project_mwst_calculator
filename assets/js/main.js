let netToBrut = document.getElementById('net_to_brut');
let brutToNet = document.getElementById('brut_to_net');
let mwst19 = document.getElementById('mwst_19');
let mwst7 = document.getElementById('mwst_7');
let descrInput = document.getElementById('descr_input');
let inputAmount = document.getElementById('input_amount');
let outputMwst = document.getElementById('output_mwst');
let descrOutputTotal = document.getElementById('descr_output_total');
let outputTotal = document.getElementById('output_total');

let calcMwst = () => {

    if ((netToBrut.checked) && (mwst19.checked)) {
        descrInput.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>`;
        outputMwst.innerHTML = '';
        outputTotal.innerHTML = '';
        outputMwst.innerHTML = (inputAmount.value * 0.19).toFixed(2);
        descrOutputTotal.innerHTML = 'Bruttobetrag (Endpreis)'
        outputTotal.innerHTML = (inputAmount.value * 1.19).toFixed(2);
    }

    else if ((netToBrut.checked) && (mwst7.checked)) {
        descrInput.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>`;
        outputMwst.innerHTML = '';
        outputTotal.innerHTML = '';
        outputMwst.innerHTML = (inputAmount.value * 0.07).toFixed(2);
        descrOutputTotal.innerHTML = 'Bruttobetrag (Endpreis)'
        outputTotal.innerHTML = (inputAmount.value * 1.07).toFixed(2);
    }

    else if ((brutToNet.checked) && (mwst19.checked)) {
        descrInput.innerHTML = '';
        descrInput.innerHTML = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro';
        outputMwst.innerHTML = '';
        outputTotal.innerHTML = '';
        outputMwst.innerHTML = ((inputAmount.value / 119) * 19).toFixed(2);
        descrOutputTotal.innerHTML = 'Nettobetrag';
        outputTotal.innerHTML = (inputAmount.value - (inputAmount.value / 119) * 19).toFixed(2);

    }

    else if ((brutToNet.checked) && (mwst7.checked)) {
        descrInput.innerHTML = '';
        descrInput.innerHTML = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro';
        outputMwst.innerHTML = '';
        outputTotal.innerHTML = '';
        outputMwst.innerHTML = ((inputAmount.value / 107) * 7).toFixed(2);
        descrOutputTotal.innerHTML = 'Nettobetrag';
        outputTotal.innerHTML = (inputAmount.value - (inputAmount.value / 107) * 7).toFixed(2);
    }
}