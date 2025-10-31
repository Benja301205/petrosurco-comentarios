// Manejo del formulario de comentarios
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('complaintForm');
    const successMessage = document.getElementById('successMessage');
    const logo = document.getElementById('logo');

    // Ocultar logo si no existe la imagen
    logo.onerror = function() {
        this.style.display = 'none';
    };

    // Manejo del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar formulario
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Recopilar datos del formulario
        const formData = {
            tipo: document.getElementById('tipo').value,
            comentario: document.getElementById('comentario').value,
            fecha: new Date().toISOString(),
            timestamp: Date.now()
        };

        // Guardar en localStorage (para demostración)
        saveComplaint(formData);

        // Mostrar mensaje de éxito
        form.style.display = 'none';
        successMessage.classList.add('show');

        // Opcional: Enviar datos a un servidor
        // sendToServer(formData);

        // Resetear formulario después de 3 segundos
        setTimeout(function() {
            form.reset();
            form.style.display = 'flex';
            successMessage.classList.remove('show');

            // Scroll suave hacia arriba
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 4000);
    });

    // Función para guardar quejas en localStorage
    function saveComplaint(data) {
        let complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
        complaints.push(data);
        localStorage.setItem('complaints', JSON.stringify(complaints));
        console.log('Queja guardada:', data);
    }

    // Función para enviar datos al servidor (para implementar)
    function sendToServer(data) {
        // Ejemplo de cómo enviar datos a un servidor
        /*
        fetch('/api/complaints', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Éxito:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    }

    // Contador de caracteres para el comentario
    const comentarioTextarea = document.getElementById('comentario');
    const maxLength = 1000;

    comentarioTextarea.setAttribute('maxlength', maxLength);

    // Animación suave para inputs
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateX(2px)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateX(0)';
        });
    });
});

// Función para exportar quejas (útil para administración)
function exportComplaints() {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const dataStr = JSON.stringify(complaints, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `quejas_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
}

// Función para ver todas las quejas guardadas (para administración)
function viewComplaints() {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    console.table(complaints);
    return complaints;
}

// Hacer funciones disponibles globalmente para uso en consola
window.exportComplaints = exportComplaints;
window.viewComplaints = viewComplaints;