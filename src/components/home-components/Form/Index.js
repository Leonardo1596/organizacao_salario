import React, { useRef } from 'react';
import * as C from './styles';

const Index = (props) => {
    const dateRef = useRef(null);
    const initialKmRef = useRef(null);
    const finalKmRef = useRef(null);
    const grossGainRef = useRef(null);

    // Clean form after add input
    function clearFields() {
        dateRef.current.value = '';
        initialKmRef.current.value = '';
        finalKmRef.current.value = '';
        grossGainRef.current.value = '';
    }

    
    function handleAddInput() {
        const date = dateRef.current.value;
        const initialKm = parseFloat(initialKmRef.current.value);
        const finalKm = parseFloat(finalKmRef.current.value);
        const grossGain = parseFloat(grossGainRef.current.value).toFixed(2);

        // Validação básica - você pode adicionar mais validações conforme necessário
        if (!date || isNaN(initialKm) || isNaN(finalKm) || isNaN(grossGain)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
          }

        props.addInput(date, initialKm, finalKm, grossGain);
        clearFields();
    }

    return (
        <div>
            <C.Container>
                <C.Area>
                    <C.Form>
                        <C.FormField>
                            <label>Data:</label>
                            <C.Input type="text" ref={dateRef} />
                        </C.FormField>
                        <C.FormField>
                            <label>Km Inicial:</label>
                            <C.Input type="text" ref={initialKmRef} />

                        </C.FormField>
                        <C.FormField>
                            <label>Km Final:</label>
                            <C.Input type="text" ref={finalKmRef} />
                        </C.FormField>
                        <C.FormField>
                            <label>Valor Bruto:</label>
                            <C.Input type="text" ref={grossGainRef} />
                        </C.FormField>

                        <button onClick={handleAddInput}>
                            Adicionar Entrada
                        </button>
                    </C.Form>
                </C.Area>
            </C.Container>
        </div>
    )
}

export default Index